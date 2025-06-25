import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";

import { Station } from "@/entities/station.entity";

@Entity({ name: "Customer" })
export class Customer {
	@PrimaryColumn({ name: "Id", type: "varchar", length: 255 })
	public id: string;

	@Column({ name: "Name", type: "varchar", length: 255 })
	public name: string;

	@Column({ name: "Email", type: "varchar", length: 255 })
	public email: string;

	@Column({ name: "Address", type: "varchar", length: 255 })
	public address: string;

	@ManyToMany(() => Station, (s) => s.customers)
	@JoinTable({
		name: "CustomerStation",
		joinColumn: {
			name: "CustomerId",
			referencedColumnName: "id",
		},
		inverseJoinColumn: {
			name: "StationId",
			referencedColumnName: "id",
		},
	})
	public stations: Station[];
}
