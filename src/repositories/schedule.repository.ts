import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Schedule } from "@/entities/schedule.entity";
import { ViewScheduleTypePoint } from "@/entities/view_schedule_type_point.entity";

@Injectable()
export class ScheduleRepository {
	constructor(
		@InjectRepository(Schedule)
		private readonly entities: Repository<Schedule>,

		@InjectRepository(Schedule)
		private readonly viewEntities: Repository<ViewScheduleTypePoint>,
	) {}

	public async getSchedules(): Promise<Schedule[]> {
		try {
			return this.entities.find();
		} catch (e) {
			throw new NotFoundException();
		}
	}

	public async getSchedulesByTugboatId(id: string): Promise<Schedule[]> {
		try {
			return this.entities.find({
				where: { tugboatId: id },
				order: { enterDateTime: "ASC" },
			});
		} catch (e) {
			throw new NotFoundException();
		}
	}

	public async getSchedulesByOrderId(id: string): Promise<Schedule[]> {
		try {
			return await this.entities.find({
				where: { tugboatId: id },
				order: { enterDateTime: "ASC" },
			});
		} catch (e) {
			throw new NotFoundException();
		}
	}

	public async getSchedulesByTugboatAndOrderId(
		tugboatId: string,
		orderId: string,
		point?: string,
		enter?: string,
		exit?: string,
	): Promise<Schedule[]> {
		type mock_type = {
			tugboatId: string;
			orderId: string;
			point?: string;
			enter?: string;
			exit?: string;
		};

		try {
			const mock: mock_type = {
				tugboatId: tugboatId,
				orderId: orderId,
			};

			if (point) mock.point = point;
			if (enter) mock.enter = enter;
			if (exit) mock.exit = exit;

			return await this.entities.find({
				where: mock,
				order: { enterDateTime: "ASC" },
			});
		} catch (e) {
			throw new NotFoundException();
		}
	}

	public async getTugboatTimeline(
		tugboatId?: string,
		orderId?: string,
	): Promise<Schedule[]> {
		type mock_type = {
			typePoint: string;
			tugboatId?: string;
			orderId?: string;
		};

		try {
			const mock: mock_type = { typePoint: "main_point" };
			if (tugboatId) mock.tugboatId = tugboatId;
			if (orderId) mock.orderId = orderId;

			return await this.entities.find({
				where: mock,
				order: { enterDateTime: "ASC" },
			});
		} catch (e) {
			throw new NotFoundException();
		}
	}

	public async getViewSchedulesTypePoint(): Promise<any> {
		try {
			return this.viewEntities.find();
		} catch (e) {
			throw new NotFoundException();
		}
	}
}
