import { ViewEntity, PrimaryColumn } from "typeorm";

@ViewEntity({ name: "view_schedule_type_point" })
export class ViewScheduleTypePoint {
	@PrimaryColumn({ name: "TypePoint", type: "varchar", length: 255 })
	public typePoint: string;
}
