import { Injectable } from "@nestjs/common";

import { ScheduleRepository } from "@/repositories/schedule.repository";

@Injectable()
export class ScheduleService {
	constructor(private readonly repository: ScheduleRepository) {}

	public async getSchedules(): ReturnType<
		ScheduleRepository["getSchedules"]
	> {
		return await this.repository.getSchedules();
	}

	public async getSchedulesByTugboatId(
		id: string,
	): ReturnType<ScheduleRepository["getSchedulesByTugboatId"]> {
		return await this.repository.getSchedulesByTugboatId(id);
	}

	public async getSchedulesByOrderId(
		id: string,
	): ReturnType<ScheduleRepository["getSchedulesByOrderId"]> {
		return await this.repository.getSchedulesByOrderId(id);
	}

	public async getSchedulesByTugboatAndOrderId(
		tugboatId: string,
		orderId: string,
		point?: string,
		enter?: string,
		exit?: string,
	): ReturnType<ScheduleRepository["getSchedulesByTugboatAndOrderId"]> {
		return await this.repository.getSchedulesByTugboatAndOrderId(
			tugboatId,
			orderId,
			point,
			enter,
			exit,
		);
	}

	public async getTugboatTimeline(
		tugboatId: string,
		orderId: string,
	): ReturnType<ScheduleRepository["getTugboatTimeline"]> {
		return await this.repository.getTugboatTimeline(tugboatId, orderId);
	}

	public async getViewSchedulesTypePoints(): ReturnType<
		ScheduleRepository["getViewSchedulesTypePoint"]
	> {
		return await this.repository.getViewSchedulesTypePoint();
	}
}
