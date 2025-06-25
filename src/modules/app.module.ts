import { Module } from "@nestjs/common";

import { BargeModule } from "@/modules/barge.module";
import { CarrierModule } from "@/modules/carrier.module";
import { CostModule } from "@/modules/cost.module";
import { CustomerModule } from "@/modules/customer.module";
import { DatabaseModule } from "@/modules/database.module";
import { OrderModule } from "@/modules/order.module";
import { ScheduleModule } from "@/modules/schedule.module";
import { StationModule } from "@/modules/station.module";
import { TugboatModule } from "@/modules/tugboat.module";

@Module({
	imports: [
		BargeModule,
		CarrierModule,
		CostModule,
		CustomerModule,
		DatabaseModule,
		OrderModule,
		ScheduleModule,
		StationModule,
		TugboatModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
