const ip = {
    getIp: function () {
        if (this.headers['cf-connecting-ip']) {
            return this.headers['cf-connecting-ip'];
        } else if (this.headers['x-real-ip']) {
            return this.headers['x-real-ip'];
        } else if (this.headers.forwarded) {
            let reqArr = this.headers?.forwarded?.split(';');
            let reqIp = reqArr[0];
            reqIp = reqIp.replace('for=', '');
            return reqIp;
        } else {
            return this.connection?.remoteAddress;
        }
    }
}

export default ip;