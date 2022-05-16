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
            Models: ["iPhone SE 2nd gen", "iPhone 8", "iPhone 7", "iPhone 6S"],
        },
        "1242-2688": {
            Width: "1242",
            Height: "2688",
            Scale: "3",
            Models: ["iPhone 11 Pro Max", "iPhone XS Max"],
        },
        "1125-2436": {
            Width: "1125",
            Height: "2436",
            Scale: "3",
            Models: ["iPhone 11 Pro", "iPhone XS", "iPhone X"],
        },
        "828-1792": {
            Width: "828",
            Height: "1792",
            Scale: "2",
            Models: ["iPhone 11", "iPhone XR"],
        },
        "1080-1920": {
            Width: "1080",
            Height: "1920",
            Scale: "3",
            Models: ["iPhone 8 Plus"],
        },
        "1242-2208": {
            Width: "1242",
            Height: "2208",
            Scale: "3",
            Models: ["iPhone 7 Plus", "iPhone 6S Plus", "iPhone 6 Plus"],
        },
        "640-1136": {
            Width: "640",
            Height: "1136",
            Scale: "2",
            Models: ["iPhone SE 1st gen", "iPhone 5C"],
        },
        "750-1136": {
            Width: "750",
            Height: "1136",
            Scale: "2",
            Models: ["iPhone 6"],
        },
        "640-960": {
            Width: "640",
            Height: "960",
            Scale: "2",
            Models: ["iPhone 5S", "iPhone 5", "iPhone 4S", "iPhone 4"],
        },
        "320-480": {
            Width: "320",
            Height: "480",
            Scale: "1",
            Models: ["iPhone 3GS", "iPhone 3G", "iPhone 1st gen"],
        },
        "1488-2266": {
            Width: "1488",
            Height: "2266",
            Scale: "2",
            Models: ["iPad Mini (6th gen)"],
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
                const scale = Number(devices[key].Scale);
                layer.rescale(1 / scale);
                if (scale == 1) {
                    figma.closePlugin("Scale factor is 1, no changes");
                }
                else {
                    figma.closePlugin("The selected frame downscaled for 1/" + scale);
                }
            }
        }
        else {
            const scale = Number(devices[key].Scale);
            layer.rescale(1 / scale);
            figma.closePlugin("The selected frame downscaled for 1/" + scale);
        }
    }
    figma.closePlugin();
}
runPlugin();
