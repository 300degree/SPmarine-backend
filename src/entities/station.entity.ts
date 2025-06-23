import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Barge } from './barge.entity';
import { Tugboat } from './tugboat.entity';
import { Order } from './order.entity';

@Entity({ name: 'Station' })
export class Station {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  public id: string;

  @Column({ type: 'varchar', length: 255 })
  public name: string;

  @Column({
    type: 'enum',
    enum: ['SEA', 'RIVER'],
    default: 'SEA',
    nullable: true,
  })
  public type: 'SEA' | 'RIVER';

  @Column({ type: 'float' })
  public latitude: number;

  @Column({ type: 'float' })
  public longitude: number;

  @Column({ type: 'float' })
  public distanceKm: number;

  @OneToMany(() => Barge, (barge) => barge.station)
  public barges: Barge[];

  @OneToMany(() => Tugboat, (tugboat) => tugboat.station)
  public tugboats: Tugboat[];

  @OneToMany(() => Order, (order) => order.startStation)
  public startStations: Order[];

  @OneToMany(() => Order, (order) => order.destStation)
  public destStations: Order[];
}
