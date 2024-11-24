var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Data_Devoir_Carte_ThematiqueData_provinces_1 = new ol.format.GeoJSON();
var features_Data_Devoir_Carte_ThematiqueData_provinces_1 = format_Data_Devoir_Carte_ThematiqueData_provinces_1.readFeatures(json_Data_Devoir_Carte_ThematiqueData_provinces_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_Devoir_Carte_ThematiqueData_provinces_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_Devoir_Carte_ThematiqueData_provinces_1.addFeatures(features_Data_Devoir_Carte_ThematiqueData_provinces_1);
var lyr_Data_Devoir_Carte_ThematiqueData_provinces_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Data_Devoir_Carte_ThematiqueData_provinces_1, 
                style: style_Data_Devoir_Carte_ThematiqueData_provinces_1,
                popuplayertitle: "Data_Devoir_Carte_Thematique — Data_provinces",
                interactive: true,
                title: '<img src="styles/legend/Data_Devoir_Carte_ThematiqueData_provinces_1.png" /> Data_Devoir_Carte_Thematique — Data_provinces'
            });
var format_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2 = new ol.format.GeoJSON();
var features_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2 = format_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2.readFeatures(json_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2.addFeatures(features_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2);
var lyr_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2, 
                style: style_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2,
                popuplayertitle: "Data_Devoir_Carte_Thematique — Province_Marrakech_Safi",
                interactive: true,
    title: 'Data_Devoir_Carte_Thematique — Province_Marrakech_Safi<br />\
    <img src="styles/legend/Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2_0.png" /> Province de Youssoufia: 246098<br />\
    <img src="styles/legend/Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2_1.png" /> Province de  Rehamna: 345772<br />\
    <img src="styles/legend/Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2_2.png" /> Province de Chichaoua: 378932<br />\
    <img src="styles/legend/Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2_3.png" /> Province d\'Essouira: 425449<br />\
    <img src="styles/legend/Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2_4.png" /> Province de EL Kalaa des Sragna: 560075<br />\
    <img src="styles/legend/Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2_5.png" /> Province d\'Al Haouz: 642171<br />\
    <img src="styles/legend/Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2_6.png" /> Province de Safi: 719299<br />\
    <img src="styles/legend/Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2_7.png" /> Province de Marrakech: 1560704<br />'
        });
var format_Pointsdepuisunetable_3 = new ol.format.GeoJSON();
var features_Pointsdepuisunetable_3 = format_Pointsdepuisunetable_3.readFeatures(json_Pointsdepuisunetable_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointsdepuisunetable_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointsdepuisunetable_3.addFeatures(features_Pointsdepuisunetable_3);
var lyr_Pointsdepuisunetable_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pointsdepuisunetable_3, 
                style: style_Pointsdepuisunetable_3,
                popuplayertitle: "Points depuis une table",
                interactive: true,
                title: '<img src="styles/legend/Pointsdepuisunetable_3.png" /> Points depuis une table'
            });
var format_Data_Devoir_Carte_ThematiqueCheflieu_4 = new ol.format.GeoJSON();
var features_Data_Devoir_Carte_ThematiqueCheflieu_4 = format_Data_Devoir_Carte_ThematiqueCheflieu_4.readFeatures(json_Data_Devoir_Carte_ThematiqueCheflieu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_Devoir_Carte_ThematiqueCheflieu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_Devoir_Carte_ThematiqueCheflieu_4.addFeatures(features_Data_Devoir_Carte_ThematiqueCheflieu_4);
var lyr_Data_Devoir_Carte_ThematiqueCheflieu_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Data_Devoir_Carte_ThematiqueCheflieu_4, 
                style: style_Data_Devoir_Carte_ThematiqueCheflieu_4,
                popuplayertitle: "Data_Devoir_Carte_Thematique — Cheflieu",
                interactive: true,
                title: 'Data_Devoir_Carte_Thematique — Cheflieu'
            });
var format_Lignes_5 = new ol.format.GeoJSON();
var features_Lignes_5 = format_Lignes_5.readFeatures(json_Lignes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lignes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lignes_5.addFeatures(features_Lignes_5);
var lyr_Lignes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lignes_5, 
                style: style_Lignes_5,
                popuplayertitle: "Lignes",
                interactive: true,
                title: '<img src="styles/legend/Lignes_5.png" /> Lignes'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_Data_Devoir_Carte_ThematiqueData_provinces_1.setVisible(true);lyr_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2.setVisible(true);lyr_Pointsdepuisunetable_3.setVisible(true);lyr_Data_Devoir_Carte_ThematiqueCheflieu_4.setVisible(true);lyr_Lignes_5.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_Data_Devoir_Carte_ThematiqueData_provinces_1,lyr_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2,lyr_Pointsdepuisunetable_3,lyr_Data_Devoir_Carte_ThematiqueCheflieu_4,lyr_Lignes_5];
lyr_Data_Devoir_Carte_ThematiqueData_provinces_1.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', });
lyr_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2.set('fieldAliases', {'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Data_Devoir_Carte_Thematique — Cheflieu_Code_Provi': 'Data_Devoir_Carte_Thematique — Cheflieu_Code_Provi', 'Data_Devoir_Carte_Thematique — Cheflieu_Nom_Provin': 'Data_Devoir_Carte_Thematique — Cheflieu_Nom_Provin', 'Data_Devoir_Carte_Thematique — Cheflieu_Area': 'Data_Devoir_Carte_Thematique — Cheflieu_Area', 'Data_Devoir_Carte_Thematique — Cheflieu_Population_2024': 'Data_Devoir_Carte_Thematique — Cheflieu_Population_2024', 'Data_Devoir_Carte_Thematique — Cheflieu_Chef lieu': 'Data_Devoir_Carte_Thematique — Cheflieu_Chef lieu', 'Data_Devoir_Carte_Thematique — Cheflieu_lat': 'Data_Devoir_Carte_Thematique — Cheflieu_lat', 'Data_Devoir_Carte_Thematique — Cheflieu_long': 'Data_Devoir_Carte_Thematique — Cheflieu_long', });
lyr_Pointsdepuisunetable_3.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', });
lyr_Data_Devoir_Carte_ThematiqueCheflieu_4.set('fieldAliases', {'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', });
lyr_Lignes_5.set('fieldAliases', {'fid': 'fid', });
lyr_Data_Devoir_Carte_ThematiqueData_provinces_1.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'Hidden', 'Area': 'TextEdit', 'Population_2024': 'Range', 'Chef lieu': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', });
lyr_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2.set('fieldImages', {'Code_Provi': 'Hidden', 'Nom_Provin': 'Hidden', 'Data_Devoir_Carte_Thematique — Cheflieu_Code_Provi': 'Hidden', 'Data_Devoir_Carte_Thematique — Cheflieu_Nom_Provin': 'TextEdit', 'Data_Devoir_Carte_Thematique — Cheflieu_Area': 'TextEdit', 'Data_Devoir_Carte_Thematique — Cheflieu_Population_2024': 'Range', 'Data_Devoir_Carte_Thematique — Cheflieu_Chef lieu': 'TextEdit', 'Data_Devoir_Carte_Thematique — Cheflieu_lat': 'Hidden', 'Data_Devoir_Carte_Thematique — Cheflieu_long': 'Hidden', });
lyr_Pointsdepuisunetable_3.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'TextEdit', 'Area': 'TextEdit', 'Population_2024': 'Range', 'Chef lieu': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', });
lyr_Data_Devoir_Carte_ThematiqueCheflieu_4.set('fieldImages', {'Code_Provi': 'Hidden', 'Nom_Provin': 'Hidden', 'Area': 'TextEdit', 'Population_2024': 'Range', 'Chef lieu': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', });
lyr_Lignes_5.set('fieldImages', {'fid': 'Hidden', });
lyr_Data_Devoir_Carte_ThematiqueData_provinces_1.set('fieldLabels', {'Area': 'inline label - always visible', 'Population_2024': 'inline label - always visible', 'Chef lieu': 'no label', });
lyr_Data_Devoir_Carte_ThematiqueProvince_Marrakech_Safi_2.set('fieldLabels', {'Data_Devoir_Carte_Thematique — Cheflieu_Nom_Provin': 'no label', 'Data_Devoir_Carte_Thematique — Cheflieu_Area': 'no label', 'Data_Devoir_Carte_Thematique — Cheflieu_Population_2024': 'no label', 'Data_Devoir_Carte_Thematique — Cheflieu_Chef lieu': 'no label', });
lyr_Pointsdepuisunetable_3.set('fieldLabels', {'Nom_Provin': 'inline label - always visible', 'Area': 'inline label - always visible', 'Population_2024': 'inline label - always visible', 'Chef lieu': 'inline label - always visible', });
lyr_Data_Devoir_Carte_ThematiqueCheflieu_4.set('fieldLabels', {'Area': 'inline label - always visible', 'Population_2024': 'inline label - always visible', 'Chef lieu': 'inline label - always visible', });
lyr_Lignes_5.set('fieldLabels', {});
lyr_Lignes_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});