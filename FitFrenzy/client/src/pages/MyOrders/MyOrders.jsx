function MyOrders() {
  return (
    <div className="order-container">
      <h1>My Orders</h1>

      <div className="order-list">
        <div className="order-item">
          <h3>Order #1</h3>
          <p>Order Date: 2021-08-01</p>
          <p>Order Total: $100.00</p>
          <p>Order Status: Delivered</p>
        </div>

        <div className="order-item">
          <h3>Order #2</h3>
          <p>Order Date: 2021-08-02</p>
          <p>Order Total: $200.00</p>
          <p>Order Status: Delivered</p>
        </div>

        <div className="order-item">
          <h3>Order #3</h3>
          <p>Order Date: 2021-08-03</p>
          <p>Order Total: $300.00</p>
          <p>Order Status: Delivered</p>
        </div>

        <div className="order-item">
          <h3>Order #4</h3>
          <p>Order Date: 2021-08-04</p>
          <p>Order Total: $400.00</p>
          <p>Order Status: Delivered</p>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
