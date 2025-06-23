import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Carrier' })
export class Carrier {
  @PrimaryColumn({ name: 'Id', type: 'varchar', length: 255 })
  public id: string;

  @Column({ name: 'Name', type: 'varchar', length: 255 })
  public name: string;
}
