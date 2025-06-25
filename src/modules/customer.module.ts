import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Customer } from "@/entities/customer.entity";
import { Schedule } from "@/entities/schedule.entity";
import { Station } from "@/entities/station.entity";
import { CustomerController } from "@/controllers/customer.controller";
import { CustomerRepository } from "@/repositories/customer.repository";
import { CustomerService } from "@/services/customer.service";
import { CustomerStation } from "@/entities/customer-station.entity";

@Module({
	imports: [
		TypeOrmModule.forFeature([
			Customer,
			Schedule,
			CustomerStation,
			Station,
		]),
	],
	controllers: [CustomerController],
	providers: [CustomerService, CustomerRepository],
	exports: [CustomerService, CustomerRepository],
})
export class CustomerModule {}
