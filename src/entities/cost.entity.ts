import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "Cost" })
export class Cost {
	@PrimaryColumn({ name: "TugboatId", type: "varchar", length: 255 })
	public tugboatId: string;

	@PrimaryColumn({ name: "OrderId", type: "varchar", length: 255 })
	public orderId: string;

	@Column({ name: "Time", type: "float" })
	public time: number;

	@Column({ name: "Distance", type: "float" })
	public distance: number;

	@Column({ name: "ConsumptionRate", type: "float" })
	public consumptionRate: number;

	@Column({ name: "Cost", type: "float" })
	public cost: number;

	@Column({ name: "TotalLoad", type: "float" })
	public totalLoad: number;
}
