import { DataTable } from "@/components/custom ui/DataTable";
import { columns } from "@/components/orderItems/OrderItemsColums";
// import { useState } from "react";
import { Separator } from "@/components/ui/separator";

const OrderDetails = async ({ params }: { params: { orderId: string } }) => {
  const res = await fetch(
    `${process.env.ADMIN_DASHBOARD_URL}/api/orders/${params.orderId}`
  );
  // const res = await fetch(`http://localhost:3000/orders/api/orders/${params.orderId}`);

  const { orderDetails, customer } = await res.json();

  const { street, city, state, postalCode, country } =
    orderDetails.shippingAddress;
  console.log(orderDetails);

  return (
    <>
      <div className="px-10 py-5 pb-0">
        <p className="text-heading2-bold text-orange-600">Chi Tiết Đơn Hàng</p>
        <Separator className="bg-grey-1 my-4" />
      </div>
      <div className="flex flex-col p-10 gap-5">
        <p className="text-base-bold text-orange-700 p-[10px] border-b-[1px] border-[#dddddd] w-max  ">
          Mã đơn hàng:{" "}
          <span className="text-base-medium text-[#333333] text-[16px]">
            {orderDetails._id}
          </span>
        </p>
        <p className="text-base-bold text-orange-700 p-[10px] border-b-[1px] border-[#dddddd] w-max  ">
          Tên khách hàng:{" "}
          <span className="text-base-medium text-[#333333] text-[16px]">
            {customer.name}
          </span>
        </p>
        <p className="text-base-bold text-orange-700 p-[10px] border-b-[1px] border-[#dddddd] w-max  ">
          Số điện thoại:{" "}
          <span className="text-base-medium text-[#333333] text-[16px]">
            {postalCode}
          </span>
        </p>
        <p className="text-base-bold text-orange-700 p-[10px] border-b-[1px] border-[#dddddd] w-max  ">
          Email:{" "}
          <span className="text-base-medium text-[#333333] text-[16px]">
            {customer.email}
          </span>
        </p>
        <p className="text-base-bold text-orange-700 p-[10px] border-b-[1px] border-[#dddddd] w-max  ">
          Địa chỉ giao hàng:{" "}
          <span className="text-base-medium text-[#333333] text-[16px]">
            {street}, {city}, {country}
          </span>
        </p>
        <p className="text-base-bold text-orange-700 p-[10px] border-b-[1px] border-[#dddddd] w-max  ">
          Tổng:{" "}
          <span className="text-base-medium text-orange-600 text-[16px] font-bold">
            {orderDetails.totalAmount.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </p>

        <DataTable
          columns={columns}
          data={orderDetails.products}
          searchKey="product"
        />
      </div>
    </>
  );
};

export default OrderDetails;
