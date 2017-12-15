QUnit.test( "a test", function( assert ) {
    assert.expect( 1 );

    var $body = $( "body" );

    $body.on( "click", function() {
       $body.off("click");
        assert.ok( true, "body was clicked!" );
    });

    $body.trigger( "click" );
});