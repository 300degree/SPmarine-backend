import { InjectRepository } from "@nestjs/typeorm";
import {
	Injectable,
	NotFoundException,
	ConflictException,
} from "@nestjs/common";
import { Repository } from "typeorm";

import { Customer } from "@/entities/customer.entity";
import { Station } from "@/entities/station.entity";

@Injectable()
export class CustomerRepository {
	constructor(
		@InjectRepository(Customer)
		private readonly entities: Repository<Customer>,

		@InjectRepository(Station)
		private readonly stationEntities: Repository<Station>,
	) {}

	private async getStationIdsForCustomers(id: string): Promise<string[]> {
		const c: Customer | null = await this.entities.findOne({
			where: { id: id },
			relations: { stations: true },
		});

		return c?.stations?.map((s) => s.id) || [];
	}

	public async getCustomers(): Promise<Customer[]> {
		return this.entities.find({
			relations: {
				stations: true,
			},
			order: {
				name: "ASC",
				stations: {
					name: "ASC",
				},
			},
		});
	}

	public async getCustomersById(id: string): Promise<Customer> {
		const c: Customer | null = await this.entities.findOne({
			where: { id },
			relations: {
				stations: true,
			},
		});
		if (!c) throw new NotFoundException();

		return c;
	}

	public async getCustomersByStationId(id: string): Promise<Customer[]> {
		return this.entities.find({
			relations: {
				stations: true,
			},
			where: {
				stations: {
					id: id,
				},
			},
		});
	}

	public async createCustomers(
		obj: Partial<Customer>,
	): Promise<Customer | null> {
		const exists: Customer | null = await this.entities
			.findOne({
				where: { id: obj.id },
			})
			.catch(() => null);
		if (exists) throw new ConflictException();

		return this.getCustomersById(
			(await this.entities.save(this.entities.create(obj))).id,
		);
	}

	public async addStationToCustomers(
		cId: string,
		sId: string,
	): Promise<Customer | null> {
		const c: Customer | null = await this.entities.findOne({
			where: { id: cId },
			relations: { stations: true },
		});
		if (!c) throw new NotFoundException();

		const s: Station | null = await this.stationEntities.findOne({
			where: { id: sId },
		});
		if (!s) throw new NotFoundException();

		const isRelated: boolean = c.stations?.some((s) => s.id === sId);
		if (isRelated) throw new ConflictException();

		await this.entities
			.createQueryBuilder()
			.relation(Customer, "stations")
			.of(cId)
			.add(sId);

		return this.getCustomersById(cId);
	}

	public async updateCustomers(
		id: string,
		body: Partial<Customer>,
	): Promise<Customer> {
		const exists: Customer | null = await this.entities.findOneBy({ id });
		if (!exists) throw new NotFoundException();

		await this.entities.update(id, body);

		return this.getCustomersById(id);
	}

	public async updateCustomerStations(
		cId: string,
		sId: string[],
	): Promise<void> {
		const c: Customer | null = await this.entities.findOne({
			where: { id: cId },
		});
		if (!c) throw new NotFoundException();

		for (const s of sId) {
			const station: Station | null = await this.stationEntities.findOne({
				where: { id: s },
			});
			if (!station) throw new NotFoundException();
		}

		const currentStation: string[] =
			await this.getStationIdsForCustomers(cId);

		if (currentStation.length > 0) {
			await this.entities
				.createQueryBuilder()
				.relation(Customer, "stations")
				.of(cId)
				.remove(currentStation);
		}

		if (sId.length > 0)
			await this.entities
				.createQueryBuilder()
				.relation(Customer, "stations")
				.of(cId)
				.add(sId);
	}

	public async deleteCustomer(id: string): Promise<void> {
		const exists: Customer | null = await this.entities.findOneBy({ id });
		if (!exists) throw new NotFoundException();

		await this.entities
			.createQueryBuilder()
			.relation(Customer, "stations")
			.of(id)
			.remove(await this.getStationIdsForCustomers(id));

		await this.entities.delete(id);
	}

	public async deleteStationFromCustomer(
		cId: string,
		sId: string,
	): Promise<Customer | null> {
		const c: Customer | null = await this.entities.findOne({
			where: { id: cId },
			relations: { stations: true },
		});

		if (!c) throw new NotFoundException();
		const isRelated: boolean = c.stations?.some((s) => s.id === sId);
		if (!isRelated) throw new NotFoundException();

		await this.entities
			.createQueryBuilder()
			.relation(Customer, "stations")
			.of(cId)
			.remove(sId);

		return this.getCustomersById(cId);
	}

	public async deleteAllStationsForCustomer(id: string): Promise<void> {
		const sId: string[] = await this.getStationIdsForCustomers(id);
		if (sId.length > 0) {
			await this.entities
				.createQueryBuilder()
				.relation(Customer, "stations")
				.of(id)
				.remove(sId);
		}
	}

	public async deleteAllCustomersForStation(id: string): Promise<void> {
		const customers: Customer[] = await this.getCustomersByStationId(id);

		for (const c of customers)
			await this.entities
				.createQueryBuilder()
				.relation(Customer, "stations")
				.of(c.id)
				.remove(id);
	}
}
