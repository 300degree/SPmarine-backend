import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as path from "path";

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "mysql",
			host: process.env.DB_HOST || "localhost",
			port: Number(process.env.DB_PORT) || 18306,
			username: process.env.DB_USER || "maria",
			password: process.env.DB_PASSWORD || "password",
			database: process.env.DB_NAME || "spinterdb",
			entities: [path.join(__dirname, "/../**/*.entity.{js,ts}")],
			/* ssl: {
        rejectUnauthorized: false,
      }, */
			extra: {
				connectionLimit: 10,
			},
			retryAttempts: 5,
			retryDelay: 3000,
			connectTimeout: 30000,
		}),
	],
	controllers: [],
	providers: [],
})
export class DatabaseModule {}
