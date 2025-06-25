import {
	Controller,
	HttpStatus,
	HttpException,
	Param,
	Body,
	ConflictException,
} from "@nestjs/common";
import { Get, Post, Put, Delete } from "@nestjs/common";

import { CustomerService } from "@/services/customer.service";
import { Customer } from "@/entities/customer.entity";

@Controller("/v1/customers")
export class CustomerController {
	constructor(private readonly service: CustomerService) {}

	@Get("/")
	public async getCustomers(): Promise<{
		message: string;
		status: number;
		body: Customer[];
	}> {
		try {
			return {
				message: HttpStatus.OK.toString(),
				status: HttpStatus.OK,
				body: await this.service.getCustomers(),
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

	@Get(":id")
	public async getCustomersById(@Param("id") id: string) {
		try {
			return this.service.getCustomersById(id);
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

	@Post("/")
	public async createCustomer(
		@Body()
		body: {
			id: string;
			name: string;
			email: string;
			address: string;
			stationIds?: string[];
		},
	): Promise<{
		message: string;
		status: number;
		body: Customer | null;
	}> {
		try {
			const exists: Customer = await this.service.getCustomersById(
				body.id,
			);
			if (exists)
				throw new HttpException(
					{
						status: HttpStatus.CONFLICT,
						response: `ID ${body.id} already exists`,
					},
					HttpStatus.CONFLICT,
				);

			const c: Customer | null = await this.service.createCustomers(body);
			return {
				message: HttpStatus.OK.toString(),
				status: HttpStatus.OK,
				body: c,
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

	@Post(":id/stations")
	public async addStationToCustomer(
		@Param("id") id: string,
		@Body("stationId") sId: string,
	): Promise<{ message: string; status: number; body: Customer | null }> {
		try {
			if (!sId)
				throw new HttpException(
					{
						status: HttpStatus.BAD_REQUEST,
						response: "Station ID is required",
					},
					HttpStatus.BAD_REQUEST,
				);

			const ret: Customer | null =
				await this.service.addStationToCustomers(id, sId);

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

	@Put(":id")
	public async updateCustomer(
		@Param("id") id: string,
		@Body()
		body: {
			name?: string;
			email?: string;
			address?: string;
			stationIds?: string[];
		},
	): Promise<{
		message: string;
		status: number;
		body: Customer;
	}> {
		try {
			return {
				message: HttpStatus.OK.toString(),
				status: HttpStatus.OK,
				body: await this.service.updateCustomers(id, body),
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

	@Delete(":id")
	public async deleteCustomer(@Param("id") id: string): Promise<{
		message: string;
		status: number;
	}> {
		try {
			await this.service.deleteCustomer(id);

			return {
				message: HttpStatus.OK.toString(),
				status: HttpStatus.OK,
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

	@Delete(":id/stations/:stationId")
	public async deleteStationFromCustomer(
		@Param("id") id: string,
		@Param("stationId") sId: string,
	): Promise<{ message: string; status: number; body: Customer | null }> {
		try {
			const ret: Customer | null =
				await this.service.deleteStationFromCustomer(id, sId);

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
}
