import { assert } from 'chai'
import { ChildClass } from "../api/wishlist/ChildClass";

describe('Test wishlist', function() {

    it('ping get/wishlist', async () => {
        const client = new ChildClass('https://uk.integration.thomascook.io');
        const response: any = await client.send();
        client.printResponse();
        assert.exists(response, 'Check that response exists');
        assert.property(response, 'message', 'missing property with error message');
    })

});
