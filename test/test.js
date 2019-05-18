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
			assert.equal(validator.validateEntry(data),"The following values were not accuratly inputted:time,foodEntries,location,quantity,repeat");
		})
		it("Should return specific error message based on the kind of invalid input",function(){
			let data ={}
			assert.equal(validator.validateEntry(data),"The following values were not accuratly inputted:time,foodEntries,location,quantity,repeat");
			data.time="01:00";
			assert.equal(validator.validateEntry(data),"The following values were not accuratly inputted:foodEntries,location,quantity,repeat");
		  	data.foodEntries=[ [ 'corn', 1 ], [ 'grains', 1 ], [ 'birdseed', 1 ], [ 'corn', 1 ] ];
			assert.equal(validator.validateEntry(data),"The following values were not accuratly inputted:location,quantity,repeat");
			data.location="Seattle";
			assert.equal(validator.validateEntry(data),"The following values were not accuratly inputted:quantity,repeat");
			data.quantity='2';
			assert.equal(validator.validateEntry(data),"The following values were not accuratly inputted:repeat");
		})
	})

})