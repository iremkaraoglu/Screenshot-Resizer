function runPlugin() {
    const devices = {
        "1170-2532": {
            Width: "1170",
            Height: "2532",
            Scale: "3",
            Models: ["iPhone 13, iPhone 13 Pro, iPhone 12, iPhone 12 Pro"],
        },
        "1080-2340": {
            Width: "1080",
            Height: "2340",
            Scale: "3",
            Models: ["iPhone 13 Mini, iPhone 12 Mini"],
        },
        "1284-2778": {
            Width: "1284",
            Height: "2778",
            Scale: "3",
            Models: ["iPhone 13 Pro Max, iPhone 12 Pro Max"],
        },
        "750-1334": {
            Width: "750",
            Height: "1334",
            Scale: "2",
            Models: ["iPhone SE 2nd gen"],
        },
        "1242-2688": {
            Width: "1242",
            Height: "2688",
            Scale: "3",
            Models: ["iPhone 11 Pro Max"],
        },
        "1125-2436": {
            Width: "1125",
            Height: "2436",
            Scale: "3",
            Models: ["iPhone 11 Pro"],
        },
        "828-1792": {
            Width: "828",
            Height: "1792",
            Scale: "2",
            Models: ["iPhone 11, iPhone XR"],
        },
    };
    for (const node of figma.currentPage.selection) {
        const layer = node;
        // Key for the portrait device size
        let key = layer.width + "-" + layer.height;
        if (devices[key] == undefined) {
            // Check if it's landscape
            key = layer.height + "-" + layer.width;
            if (devices[key] == undefined) {
                // Couldn't find a resolution like this in portrait and landscape
                figma.closePlugin("Nothing applied.");
            }
            else {
                console.log(devices[key]);
                console.log(devices[key].Scale);
                const scale = Number(devices[key].Scale);
                layer.rescale(1 / scale);
                figma.closePlugin("The selected frame downscaled for 1/" + scale);
            }
        }
    }
    figma.closePlugin();
}
runPlugin();
