function drawDot (source, f) {
    var viz = new Viz();
    viz.renderSVGElement(source)
        .then(function(element) {
            f(element);
  });

    // 
    // if(container == null) {
    //     console.log ("oups");
    // }
    // // provide data in the DOT language
    // var parsedData = vis.network.convertDot(source);

    // var data = {
    //     nodes: parsedData.nodes,
    //     edges: parsedData.edges
    // }
    // var options = parsedData.options;

    // options.autoResize = true;
    // options.width = '100%';
    // options.height = '100%';
    // options.layout = { hierarchical: { enabled: true, parentCentralization: false } };
    // // create a network
    // var network = new vis.Network(container, data, options);
    // network.fit ();
}
