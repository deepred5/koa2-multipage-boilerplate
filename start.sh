# 抓取最新的json(加时间戳防止cdn缓存)
if [ $NODE_ENV = 'yz' ] ;then
    wget --tries=3 --quiet -O manifest.json http://yzres.demo.cn/resecm/trade/pc/v2/webpack-assets.json?`date +%s`
elif [ $NODE_ENV = 'qa' ] ;then
    wget --tries=3 --quiet -O manifest.json http://qares.demo.cn/resecm/trade/pc/v2/webpack-assets.json?`date +%s`
elif [ $NODE_ENV = 'prod' ] ;then
    wget --tries=3 --quiet -O manifest.json http://res.demo.cn/resecm/trade/pc/v2/webpack-assets.json?`date +%s`
else wget --tries=3 --quiet -O manifest.json http://res.demo.cn/resecm/trade/pc/v2/webpack-assets.json?`date +%s`
fi

if [ 0 -ne $? ]; then
        echo "ERROR: 静态资源映射文件拉取失败，错误码: $?"
        exit 1
fi


# mkdir -p /home/logs/trade-node-pc/logstash/

echo "执行pm2"
# pm2-runtime start ${NODE_ENV}.json
pm2 start ecosystem.config.js