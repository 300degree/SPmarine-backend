import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import { Station } from '@/entities/station.entity';

@Entity({ name: 'Barge' })
export class Barge {
  @PrimaryColumn({ name: 'Id', type: 'varchar', length: 255 })
  public id: string;

  @Column({ name: 'Name', type: 'varchar', length: 255, nullable: true })
  public name: string;

  @Column({ name: 'Weight', type: 'float', nullable: true })
  public weight: number;

  @Column({ name: 'Capacity', type: 'float', nullable: true })
  public capacity: number;

  @Column({
    name: 'WaterStatus',
    type: 'enum',
    enum: ['SEA', 'RIVER'],
    nullable: true,
  })
  public waterStatus: 'SEA' | 'RIVER';

  @Column({ name: 'StationId', type: 'varchar', length: 255, nullable: true })
  public stationId: string;

  @ManyToOne(() => Station, (station) => station.barges)
  @JoinColumn({ name: 'stationId' })
  public station: Station;

  @Column({ name: 'SetupTime', type: 'float', nullable: true })
  public setupTime: number;

  @Column({ name: 'ReadyDatetime', type: 'datetime', nullable: true })
  public readyDatetime: Date;
}
