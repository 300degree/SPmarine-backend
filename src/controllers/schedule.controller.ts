import {
	Controller,
	HttpException,
	HttpStatus,
	Param,
	Query,
} from "@nestjs/common";
import { Get } from "@nestjs/common";

import { ScheduleService } from "@/services/schedule.service";

@Controller("/v1/schedules")
export class ScheduleController {
	constructor(private readonly service: ScheduleService) {}

	@Get("/")
	public async getSchedules(): ReturnType<ScheduleService["getSchedules"]> {
		try {
			return this.service.getSchedules();
		} catch (e) {
			throw new HttpException(
				{
					status: HttpStatus.BAD_REQUEST,
					response: e.message ?? "Bad Request",
				},
				HttpStatus.BAD_REQUEST,
			);
		}
	}

	@Get("tugboat/:tugboatId/order/:orderId")
	public async getSchedulesByTugboatAndOrderId(
		@Param("tugboatId") tugboatId: string,
		@Param("orderId") orderId: string,
		@Query("typePoint") point?: string,
		@Query("enterDateTime") enter?: string,
		@Query("exitDateTime") exit?: string,
	) {
		try {
			const ret = await this.service.getSchedulesByTugboatAndOrderId(
				tugboatId,
				orderId,
				point,
				enter,
				exit,
			);

			return {
				message: HttpStatus.OK.toString(),
				status: HttpStatus.OK,
				body: ret,
			};
		} catch (e) {
			throw new HttpException(
				{
					status: HttpStatus.BAD_REQUEST,
					response: e.message ?? "Bad Request",
				},
				HttpStatus.BAD_REQUEST,
			);
		}
	}

	@Get("tugboat/:tugboatId")
	public async getSchedulesByTugboatId(
		@Param("tugboatId") id: string,
	): ReturnType<ScheduleService["getSchedulesByTugboatId"]> {
		try {
			return await this.service.getSchedulesByTugboatId(id);
		} catch (e) {
			throw new HttpException(
				{
					status: HttpStatus.BAD_REQUEST,
					response: e.message ?? "Bad Request",
				},
				HttpStatus.BAD_REQUEST,
			);
		}
	}

	@Get("order/:orderId")
	public async getSchedulesByOrderId(
		@Param("orderId") id: string,
	): ReturnType<ScheduleService["getSchedulesByOrderId"]> {
		try {
			return await this.service.getSchedulesByOrderId(id);
		} catch (e) {
			throw new HttpException(
				{
					status: HttpStatus.BAD_REQUEST,
					response: e.message ?? "Bad Request",
				},
				HttpStatus.BAD_REQUEST,
			);
		}
	}

	@Get("timeline")
	public async getTugboatTimeline(
		@Query("tugboatId") tugboatId: string,
		@Query("orderId") orderId: string,
	): ReturnType<ScheduleService["getTugboatTimeline"]> {
		try {
			return await this.service.getTugboatTimeline(tugboatId, orderId);
		} catch (e) {
			throw new HttpException(
				{
					status: HttpStatus.BAD_REQUEST,
					response: e.message ?? "Bad Request",
				},
				HttpStatus.BAD_REQUEST,
			);
		}
	}

	@Get("view-type-point")
	public async getViewScheduleTypePoint(): ReturnType<
		ScheduleService["getViewSchedulesTypePoints"]
	> {
		try {
			return await this.service.getViewSchedulesTypePoints();
		} catch (e) {
			throw new HttpException(
				{
					status: HttpStatus.BAD_REQUEST,
					response: e.message ?? "Bad Request",
				},
				HttpStatus.BAD_REQUEST,
			);
		}
	}
}
