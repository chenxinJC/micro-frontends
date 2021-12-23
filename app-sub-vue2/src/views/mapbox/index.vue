<template>
  <div id="map"
       class="map"></div>
</template>

<script>
import "ol/ol.css";
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from "ol/layer/Tile";
import { get as getProjection, transform, transformExtent } from 'ol/proj'
import WMTS from 'ol/tilegrid/WMTS'
// import OSM from "ol/source/OSM";
import XYZ from 'ol/source/XYZ'
import ZoomSlider from 'ol/control/ZoomSlider';
import MousePosition from 'ol/control/MousePosition';

export default {
    data () {
        return {
            map: null
        }
    },
    mounted () {
        const center = transform([114.212, 22.696], "EPSG:3857", "EPSG:4326");
        const projection = getProjection("EPSG:4326")
        this.map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: this.getLayerUrlByData('vec', 'w'),
                    }),
                    projection,
                }),
                new TileLayer({
                    source: new XYZ({
                        url: this.getLayerUrlByData('cva', 'w'),
                    }),
                    projection,
                })
            ],
            view: new View({
                projection,
                center: [114.212, 22.696],
                zoom: 12,
            }),
        });
        this.map.addControl(new ZoomSlider())
        this.map.addControl(new MousePosition({
            className: 'lonlat',
            coordinateFormat: (value,value2) => {
            return `<span style="display: inline-block;padding: 4px 6px;background: #fff">${value}</span>`
            }
            }))
            this.map.on('click', function(e){
                console.log(e)
            })

    },
    methods: {
        /**
         * @description: 获取在线天地图
         * @param {*} type 获取的瓦片类型,影响，矢量
         * @param {*} wkid 坐标系
         * @param {*} token 官网申请的token
         * @return {*} 在线地址
         */
        getLayerUrlByData (type, wkid, token) {
            return `https://t{0-7}.tianditu.gov.cn/DataServer?T=${type}_${wkid}&x={x}&y={y}&l={z}&tk=f4a9a1edc60839ad362fe2d0109c6645`
            // return `https://t{0-7}.tianditu.gov.cn/${type}_${wkid}/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=${type}&STYLE=default&TILEMATRIXSET=${wkid}&FORMAT=tiles&TILEMATRIX={z}&TILEROW={x}&TILECOL={y}&tk=f4a9a1edc60839ad362fe2d0109c6645`
        }
    }
}
</script>

<style lang="less" scoped>
.map {
    width: 100%;
    height: 100%;
}
</style>
