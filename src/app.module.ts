import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'root', 
      password: 'root', 
      database: 'phpmyadmin', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true, // Sincroniza las entidades con la base de datos (solo para desarrollo)
      
    }),
    UsersModule],

  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}