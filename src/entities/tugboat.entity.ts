import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import { Station } from '@/entities/station.entity';

@Entity({ name: 'Tugboat' })
export class Tugboat {
  @PrimaryColumn({ name: 'Id', type: 'varchar', length: 255 })
  public id: string;

  @Column({ name: 'Name', type: 'varchar', length: 255, nullable: true })
  public name?: string;

  @Column({ name: 'MaxCapacity', type: 'int', nullable: true })
  public maxCapacity?: number;

  @Column({ name: 'MaxBarge', type: 'int', nullable: true })
  public maxBarge?: number;

  @Column({ name: 'MaxFuelCon', type: 'float', nullable: true })
  public maxFuelCon?: number;

  @Column({
    name: 'Type',
    type: 'enum',
    enum: ['SEA', 'RIVER'],
    default: 'SEA',
  })
  public type: 'SEA' | 'RIVER';

  @Column({ name: 'MinSpeed', type: 'float', nullable: true })
  public minSpeed?: number;

  @Column({ name: 'MaxSpeed', type: 'float', nullable: true })
  public maxSpeed?: number;

  @Column({ name: 'EngineRpm', type: 'float', nullable: true })
  public engineRpm?: number;

  @Column({ name: 'HorsePower', type: 'float', nullable: true })
  public horsePower?: number;

  @Column({
    name: 'WaterStatus',
    type: 'enum',
    enum: ['SEA', 'RIVER'],
    default: 'SEA',
  })
  public waterStatus: 'SEA' | 'RIVER';

  @Column({ name: 'ReadyDatetime', type: 'datetime', nullable: true })
  public readyDatetime?: Date;

  @ManyToOne(() => Station, (station) => station.tugboats)
  @JoinColumn({ name: 'stationId' })
  public station: Station;
}
