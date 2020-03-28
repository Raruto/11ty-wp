const axios = require( 'axios' );

module.exports = async function() {
	// Get pages.
	return axios.get( 'https://11ty.foxnet.fi/wp-json/wp/v2/pages?per_page=100' )
		.then( function( response ) {
			return response.data;
		} )
		.catch( function( error ) {
			console.log( error ); /* eslint-disable-line */
		} );
};
