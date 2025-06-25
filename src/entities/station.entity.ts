import { Entity, Column, PrimaryColumn, OneToMany, ManyToMany } from "typeorm";

import { Barge } from "@/entities/barge.entity";
import { Customer } from "@/entities/customer.entity";
import { Order } from "@/entities/order.entity";
import { Tugboat } from "@/entities/tugboat.entity";

@Entity({ name: "Station" })
export class Station {
	@PrimaryColumn({ type: "varchar", length: 255 })
	public id: string;

	@Column({ type: "varchar", length: 255 })
	public name: string;

	@Column({
		type: "enum",
		enum: ["SEA", "RIVER"],
		default: "SEA",
		nullable: true,
	})
	public type: "SEA" | "RIVER";

	@Column({ type: "float" })
	public latitude: number;

	@Column({ type: "float" })
	public longitude: number;

	@Column({ type: "float" })
	public distanceKm: number;

	@OneToMany(() => Barge, (b) => b.station)
	public barges: Barge[];

	@OneToMany(() => Tugboat, (t) => t.station)
	public tugboats: Tugboat[];

	@OneToMany(() => Order, (o) => o.startStation)
	public startStations: Order[];

	@OneToMany(() => Order, (o) => o.destStation)
	public destStations: Order[];

	@ManyToMany(() => Customer, (c) => c.stations)
	public customers: Customer[];
}
