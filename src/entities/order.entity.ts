import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";

import { Station } from "@/entities/station.entity";
import { Customer } from "@/entities/customer.entity";

@Entity({ name: "Order" })
export class Order {
	@PrimaryColumn({ name: "Id", type: "varchar", length: 255 })
	public id: string;

	@Column({ name: "Type", type: "enum", enum: ["import", "export"] })
	public type: "import" | "export";

	@Column({ name: "FromPoint", type: "varchar", length: 255 })
	public fromPoint: string;

	@Column({ name: "DestPoint", type: "varchar", length: 255 })
	public destPoint: string;

	@Column({
		name: "StartStationId",
		type: "varchar",
		length: 255,
		nullable: true,
	})
	public startStationId: string;

	@Column({
		name: "DestStationId",
		type: "varchar",
		length: 255,
		nullable: true,
	})
	public destStationId: string;

	@ManyToOne(() => Station, (s) => s.startStations)
	@JoinColumn({ name: "StartStationId", referencedColumnName: "id" })
	public startStation: Station;

	@ManyToOne(() => Station, (s) => s.destStations)
	@JoinColumn({ name: "DestStationId", referencedColumnName: "id" })
	public destStation: Station;

	@Column({ name: "ProductName", type: "varchar", length: 255 })
	public productName: string;

	@ManyToOne(() => Customer, (c) => c.address)
	@JoinColumn({ name: "destPoint", referencedColumnName: "id" })
	public customers: Customer;

	@Column({ name: "Demand", type: "float" })
	public demand: number;

	@Column({ name: "StartDateTime", type: "datetime" })
	public startDateTime: Date;

	@Column({ name: "DueDateTime", type: "datetime" })
	public dueDateTime: Date;

	@Column({ name: "", type: "float" })
	public loadingRate: number;

	@Column({ name: "CR1", type: "float" })
	public cr1: number;

	@Column({ name: "CR2", type: "float" })
	public cr2: number;

	@Column({ name: "CR3", type: "float" })
	public cr3: number;

	@Column({ name: "CR4", type: "float" })
	public cr4: number;

	@Column({ name: "CR5", type: "float" })
	public cr5: number;

	@Column({ name: "CR6", type: "float" })
	public cr6: number;

	@Column({ name: "CR7", type: "float" })
	public cr7: number;

	@Column({ name: "TimeReadyCR1", type: "float" })
	public timeReadyCR1: number;

	@Column({ name: "TimeReadyCR2", type: "float" })
	public timeReadyCR2: number;

	@Column({ name: "TimeReadyCR3", type: "float" })
	public timeReadyCR3: number;

	@Column({ name: "TimeReadyCR4", type: "float" })
	public timeReadyCR4: number;

	@Column({ name: "TimeReadyCR5", type: "float" })
	public timeReadyCR5: number;

	@Column({ name: "TimeReadyCR6", type: "float" })
	public timeReadyCR6: number;

	@Column({ name: "TimeReadyCR7", type: "float" })
	public timeReadyCR7: number;
}
