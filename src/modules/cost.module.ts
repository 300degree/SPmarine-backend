import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Cost } from "@/entities/cost.entity";
import { CostController } from "@/controllers/cost.controller";
import { CostRepository } from "@/repositories/cost.repository";
import { CostService } from "@/services/cost.service";

@Module({
	imports: [TypeOrmModule.forFeature([Cost])],
	controllers: [CostController],
	providers: [CostService, CostRepository],
	exports: [CostService],
})
export class CostModule {}
