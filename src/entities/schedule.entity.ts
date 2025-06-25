import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "Schedule" })
export class Schedule {
	@PrimaryGeneratedColumn()
	fake_id: number;

	@Column({ type: "varchar", length: 255 })
	ID: string;

	@Column({ type: "varchar", length: 255, nullable: true })
	type?: string;

	@Column({ type: "varchar", length: 255, nullable: true })
	name?: string;

	@Column({ type: "datetime", nullable: true })
	enter_datetime?: Date;

	@Column({ type: "datetime", nullable: true })
	exit_datetime?: Date;

	@Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
	distance?: number;

	@Column({ type: "decimal", precision: 10, scale: 4, nullable: true })
	time?: number;

	@Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
	speed?: number;

	@Column({ type: "varchar", length: 255, nullable: true })
	type_point?: string;

	@Column({ type: "varchar", length: 255, nullable: true })
	order_trip?: string;

	@Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
	total_load?: number;

	@Column({ type: "text", nullable: true })
	barge_ids?: string;

	@Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
	order_distance?: number;

	@Column({ type: "decimal", precision: 10, scale: 4, nullable: true })
	order_time?: number;

	@Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
	barge_speed?: number;

	@Column({ type: "datetime", nullable: true })
	order_arrival_time?: Date;

	@Column({ type: "varchar", length: 255, nullable: true })
	tugboat_id?: string;

	@Column({ type: "varchar", length: 255, nullable: true })
	order_id?: string;

	@Column({ type: "varchar", length: 50, nullable: true })
	water_type?: string;
}
// export class Schedule {
// 	@PrimaryGeneratedColumn({ type: "number" })
// 	public fakeId: number;

// 	@PrimaryColumn({ name: "Id", type: "varchar", length: 255 })
// 	public id: string;

// 	@Column({ name: "Type", type: "varchar", length: 255, nullable: true })
// 	public type: string;

// 	@Column({ name: "Name", type: "varchar", length: 255, nullable: true })
// 	public name: string;

// 	@Column({ name: "EnterDateTime", type: "datetime", nullable: true })
// 	public enterDateTime: Date;

// 	@Column({ name: "ExitDateTime", type: "datetime", nullable: true })
// 	public exitDateTime: Date;

// 	@Column({
// 		name: "Distance",
// 		type: "decimal",
// 		precision: 10,
// 		scale: 4,
// 		nullable: true,
// 	})
// 	public distance?: number;

// 	@Column({
// 		name: "Time",
// 		type: "decimal",
// 		precision: 10,
// 		scale: 4,
// 		nullable: true,
// 	})
// 	public time?: number;

// 	@Column({
// 		name: "Speed",
// 		type: "decimal",
// 		precision: 10,
// 		scale: 2,
// 		nullable: true,
// 	})
// 	public speed?: number;

// 	@Column({
// 		name: "typePoint",
// 		type: "varchar",
// 		length: 255,
// 		nullable: true,
// 	})
// 	public typePoint?: string;

// 	@Column({ name: "OrderTrip", type: "varchar", length: 255, nullable: true })
// 	public orderTrip?: string;

// 	@Column({
// 		name: "TotalLoad",
// 		type: "decimal",
// 		precision: 10,
// 		scale: 2,
// 		nullable: true,
// 	})
// 	public totalLoad?: number;

// 	@Column({ name: "BargeId", type: "varchar", length: 255, nullable: true })
// 	public bargeId?: string;

// 	@Column({
// 		name: "OrderDistance",
// 		type: "decimal",
// 		precision: 10,
// 		scale: 2,
// 		nullable: true,
// 	})
// 	public orderDistance?: number;

// 	@Column({
// 		name: "OrderTime",
// 		type: "decimal",
// 		precision: 10,
// 		scale: 4,
// 		nullable: true,
// 	})
// 	public orderTime?: number;

// 	@Column({
// 		name: "BargeSpeed",
// 		type: "decimal",
// 		precision: 10,
// 		scale: 2,
// 		nullable: true,
// 	})
// 	public bargeSpeed?: number;

// 	@Column({ name: "OrderArrivalTime", type: "datetime", nullable: true })
// 	public orderArrivalTime?: Date;

// 	@Column({ name: "TugboatId", type: "varchar", length: 255, nullable: true })
// 	public tugboatId?: string;

// 	@Column({ name: "OrderId", type: "varchar", length: 255, nullable: true })
// 	public orderId?: string;

// 	@Column({
// 		name: "WaterType",
// 		type: "enum",
// 		enum: ["SEA", "RIVER"],
// 		default: "SEA",
// 	})
// 	public waterType?: "SEA" | "RIVER" | "Sea" | "River";
// }
