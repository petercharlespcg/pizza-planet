<template>
  <form>
    <h3>Add new pizza:</h3>

    <div class="form-group row">
      <label class="col-sm-3">Name</label>
      <div class="col-sm-9">
        <input type="text" class="form-control">
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3">Description</label>
      <div class="col-sm-9">
        <textarea type="text" class="form-control" rows="5"></textarea>
      </div>
    </div>

    <p><strong>Option 1:</strong></p>
    <div class="form-group row">
      <label class="col-sm-3">Size (")</label>
      <div class="col-sm-9">
        <input type="text" class="form-control">
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3">Price</label>
      <div class="col-sm-9">
        <input type="text" class="form-control">
      </div>
    </div>

    <p><strong>Option 2:</strong></p>
    <div class="form-group row">
      <label class="col-sm-3">Size (")</label>
      <div class="col-sm-9">
        <input type="text" class="form-control">
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3">Price</label>
      <div class="col-sm-9">
        <input type="text" class="form-control">
      </div>
    </div>

    <div class="form-group row">
      <button type="button" class="btn btn-success btn-block">Add</button>
    </div>

  </form>
</template>
