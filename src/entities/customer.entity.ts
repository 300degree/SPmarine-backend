import { Entity, Column, PrimaryColumn } from "typeorm";

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
}
