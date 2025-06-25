import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";

import { Customer } from "@/entities/customer.entity";
import { Station } from "@/entities/station.entity";

@Entity({ name: "CustomerStation" })
export class CustomerStation {
	@PrimaryColumn({ name: "CustomerId", type: "varchar", length: 255 })
	public customerId: string;

	@PrimaryColumn({ name: "CustomerId", type: "varchar", length: 255 })
	public stationId: string;

	@ManyToOne(() => Customer, (c) => c.stations, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	})
	@JoinColumn({ name: "CustomerId" })
	public customer: Customer;

	@ManyToOne(() => Station, (s) => s.customers, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	})
	@JoinColumn({ name: "StationId" })
	public station: Station;
}
