import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Schedule } from "@/entities/schedule.entity";
import { ScheduleController } from "@/controllers/schedule.controller";
import { ScheduleRepository } from "@/repositories/schedule.repository";
import { ScheduleService } from "@/services/schedule.service";
import { ViewScheduleTypePoint } from "@/entities/view_schedule_type_point.entity";

@Module({
	imports: [TypeOrmModule.forFeature([Schedule, ViewScheduleTypePoint])],
	controllers: [ScheduleController],
	providers: [ScheduleService, ScheduleRepository],
})
export class ScheduleModule {}