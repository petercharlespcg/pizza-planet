<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
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
    {{ basket }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      basket: [],
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
