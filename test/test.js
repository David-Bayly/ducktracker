const assert = require('assert');
const validator = require("../validator");
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
describe('Validator',function(){
	describe("validateEntry",function(){
		it("Should return true if data is valid",function(){
			const data = { 
				time: '01:00',
		  		foodEntries:[ [ 'corn', 1 ], [ 'grains', 1 ], [ 'birdseed', 1 ], [ 'corn', 1 ] ],
		  		location: 'Seattle',
		  		quantity: '2',
		  		repeat: 'on' 
		  	}
		  	assert.equal(validator.validateEntry(data),true);
		});
		it("Should return error message if data is invalid",function(){
			const data={}
			assert.equal(validator.validateEntry(data),
				"Time can't be blank\n"+
				"Food entries can't be blank\n"+
				"Quantity can't be blank\n"+
				"Location can't be blank\n"+
				"Repeat can't be blank\n"
				);
		})
		it("Should return specific error message based on the kind of invalid input",function(){
			let data ={}
			assert.equal(validator.validateEntry(data),
				"Time can't be blank\n"+
				"Food entries can't be blank\n"+
				"Quantity can't be blank\n"+
				"Location can't be blank\n"+
				"Repeat can't be blank\n"
				);
			data.time="01:00";
			assert.equal(validator.validateEntry(data),
				"Food entries can't be blank\n"+
				"Quantity can't be blank\n"+
				"Location can't be blank\n"+
				"Repeat can't be blank\n"
				);
		  	data.foodEntries=[ [ 'corn', 1 ], [ 'grains', 1 ], [ 'birdseed', 1 ], [ 'corn', 1 ] ];
			assert.equal(validator.validateEntry(data),
				"Quantity can't be blank\n"+
				"Location can't be blank\n"+
				"Repeat can't be blank\n"
				);
			data.location="Seattle";
			assert.equal(validator.validateEntry(data),
				"Quantity can't be blank\n"+
				"Repeat can't be blank\n"
				);
			data.quantity='2';
			assert.equal(validator.validateEntry(data),
				"Repeat can't be blank\n"
				);
		})
	})

})