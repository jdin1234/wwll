function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*://*.chrome.com/*")) {
        return "SOCKS5 127.0.0.1:10808"; // 替换为你的 V2RayN SOCKS5 代理地址和端口
    }
    return "DIRECT";
}
