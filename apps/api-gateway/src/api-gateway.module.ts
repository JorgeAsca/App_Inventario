import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // Cargamos las variables de entorno globales
    ConfigModule.forRoot({
        isGlobal: true,
    }),
    
    // Usamos registerAsync para poder inyectar la configuración
    ClientsModule.registerAsync([
      {
        name: 'ADMIN_SERVICE',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            // Aquí está la magia: Si existe la variable usa esa, si no, usa localhost
            host: configService.get('MS_ADMIN_HOST') || 'localhost', 
            port: 3001,
          },
        }),
      },
    ]),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}