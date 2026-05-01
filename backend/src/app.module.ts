import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { FoodsModule } from './foods/foods.module';

@Module({
  imports: [OrdersModule, FoodsModule],
})
export class AppModule {}