exports.handler = async (event, context, callback) => {
    const request = event.Records[0].cf.request;
    var new_uri = '';
    //
    if (request.uri.match(/([0-9])([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?(-[_a-zA-Z0-9-]*)?(-[0-9]+)?\/.+\.jpg/) !== null)
    {
        new_uri = request.uri.replace(/([0-9])([0-9])?([0-9])?([0-9])?([0-9])?([0-9])?(-[_a-zA-Z0-9-]*)?(-[0-9]+)?\/.+\.jpg/, 'p/$1/$2/$3/$4/$5/$6/$1$2$3$4$5$6$7$8\.jpg');
    }
    new_uri = new_uri.replace(/\/{2,6}/g, '/');
    request.uri = new_uri;
    callback(null, request);
};
