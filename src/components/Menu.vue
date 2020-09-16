<template>
  <div class="row">
    <!-- <div class="col-sm-12 col-md-6"> --><div class="col-md-6">
      <table class="table table-hover">
        <thead class="thead-default">
          <tr>
            <th>Size</th>
            <th>Price</th>
            <th>Add to basket</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems">
          <tr>
            <td><strong>{{ item.name }}</strong></td>
          </tr>
          <tr v-for="option in item.options">
            <td>{{ option.size }}</td>
            <td>{{ option.price }}</td>
            <td><button class="btn btn-sm btn-outline-success"
                        type="button"
                        @click="addToBasket( item, option)">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- shopping basket -->
    <!-- <div class="col-sm-12 com-md-6"> --><div class="com-md-6">
    <div v-if="basket.length > 0">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>Quantity</th>
            <th>Item</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody v-for="item in basket">
          <tr>
            <td><button class="btn btn-sm btn-secondary" type="button">-</button>
              <span>{{ item.quantity }}-</span>
              <button class="btn btn-sm btn-secondary" type="button">+</button>
            </td>
            <td>{{ item.name }} {{ item.size }}</td>
            <td>{{ item.price * item.quantity }}</td>
          </tr>
        </tbody>
        <p>Order total: </p>
        <button class="btn btn-success btn-block">Place Order</button>
      </table>
      </div>
      <div v-else>
        <p>{{ basketText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basket: [],
      basketText: 'Your basket is empty!',
      getMenuItems: {
        1: {
          'name': 'Margherita',
          'description': 'A delicious tomato based pizza topped with mozzarella',
          'options': [{
            'size': 9,
            'price': 6.95
          }, {
            'size': 12,
            'price': 10.95
          }]
        },
        2: {
          'name': 'Pepperoni',
          'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
          'options': [{
            'size': 9,
            'price': 7.95
          }, {
            'size': 12,
            'price': 12.95
          }]
        },
        3: {
          'name': 'Ham and Pineapple',
          'description': 'A delicous tomato based pizza topped with mozzarella, ham and pineapple',
          'options': [{
            'size': 9,
            'price': 7.95
          }, {
            'size': 12,
            'price': 12.95
          }]
        },
      }
    }
  },
  methods: {
    addToBasket(item, option) {
      this.basket.push({
        name: item.name,
        price: option.price,
        size: option.size,
        quantity: 1
      })
    }
  }
}
</script>
