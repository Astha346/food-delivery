import { Body, Controller, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {

  @Post()
  createOrder(@Body() body: any) {
    console.log("ORDER RECEIVED:", body);

    return {
      success: true,
      message: "Order placed successfully",
      order: body,
    };
  }
}