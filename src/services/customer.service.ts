import { Injectable } from "@nestjs/common";

import { Customer } from "@/entities/customer.entity";
import { CustomerRepository } from "@/repositories/customer.repository";

@Injectable()
export class CustomerService {
	constructor(private readonly repository: CustomerRepository) {}

	public async getCustomers(): ReturnType<
		CustomerRepository["getCustomers"]
	> {
		return await this.repository.getCustomers();
	}

	public async getCustomersById(
		id: string,
	): ReturnType<CustomerRepository["getCustomersById"]> {
		return await this.repository.getCustomersById(id);
	}

	public async getCustomersByStationId(
		id: string,
	): ReturnType<CustomerRepository["getCustomersByStationId"]> {
		return await this.repository.getCustomersByStationId(id);
	}

	public async createCustomers(
		obj: Partial<Customer>,
	): ReturnType<CustomerRepository["createCustomers"]> {
		return await this.repository.createCustomers(obj);
	}

	public async addStationToCustomers(
		cId: string,
		sId: string,
	): ReturnType<CustomerRepository["addStationToCustomers"]> {
		return await this.addStationToCustomers(cId, sId);
	}

	public async updateCustomers(
		id: string,
		body: Partial<Customer>,
	): ReturnType<CustomerRepository["updateCustomers"]> {
		return await this.repository.updateCustomers(id, body);
	}

	public async updateCustomerStations(
		cId: string,
		sId: string[],
	): ReturnType<CustomerRepository["updateCustomerStations"]> {
		return await this.repository.updateCustomerStations(cId, sId);
	}

	public async deleteCustomer(
		id: string,
	): ReturnType<CustomerRepository["deleteCustomer"]> {
		return await this.repository.deleteCustomer(id);
	}

	public async deleteStationFromCustomer(
		cId: string,
		sId: string,
	): ReturnType<CustomerRepository["deleteStationFromCustomer"]> {
		return await this.repository.deleteStationFromCustomer(cId, sId);
	}

	public async deleteAllStationsForCustomer(
		id: string,
	): ReturnType<CustomerRepository["deleteAllStationsForCustomer"]> {
		return await this.repository.deleteAllStationsForCustomer(id);
	}

	public async deleteAllCustomersForStation(
		id: string,
	): ReturnType<CustomerRepository["deleteAllCustomersForStation"]> {
		return await this.repository.deleteAllCustomersForStation(id);
	}
}
