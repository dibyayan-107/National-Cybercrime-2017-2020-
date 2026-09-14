document.addEventListener("DOMContentLoaded", () => {

    const data = {
        "A & N Islands": [3, 7, 2, 5],
        "Andhra Pradesh": [931, 1207, 1886, 1899],
        "Arunachal Pradesh": [1, 7, 8, 30],
        "Assam": [1120, 2022, 2231, 3530],
        "Bihar": [433, 374, 1050, 1512],
        "Chandigarh": [32, 30, 23, 17],
        "Chhattisgarh": [171, 139, 175, 297],
        "D & N Haveli": [1, 0, 0, 3],
        "Daman & Diu": [0, 0, 3, 0],
        "Delhi": [162, 189, 115, 168],
        "Goa": [13, 29, 15, 40],
        "Gujarat": [458, 702, 784, 1283],
        "Haryana": [504, 418, 564, 656],
        "Himachal Pradesh": [56, 69, 76, 98],
        "Jammu & Kashmir": [63, 73, 73, 120],
        "Jharkhand": [720, 930, 1095, 1204],
        "Karnataka": [3174, 5839, 12020, 10741],
        "Kerala": [320, 340, 307, 426],
        "Ladakh": [0, 0, 0, 1],
        "Lakshadweep": [0, 4, 4, 3],
        "Madhya Pradesh": [490, 740, 602, 699],
        "Maharashtra": [3604, 3511, 4967, 5496],
        "Manipur": [74, 29, 4, 79],
        "Meghalaya": [39, 74, 89, 142],
        "Mizoram": [10, 6, 8, 13],
        "Nagaland": [0, 2, 2, 8],
        "Odisha": [824, 843, 1485, 1931],
        "Puducherry": [5, 14, 4, 10],
        "Punjab": [176, 239, 243, 378],
        "Rajasthan": [1304, 1104, 1762, 1354],
        "Sikkim": [1, 1, 2, 0],
        "Tamil Nadu": [228, 295, 385, 782],
        "Telangana": [1209, 1205, 2691, 5024],
        "Tripura": [7, 20, 20, 34],
        "Uttar Pradesh": [4971, 6280, 11416, 11097],
        "Uttarakhand": [124, 171, 100, 243],
        "West Bengal": [568, 335, 335, 712]
    };

    const categories = {
        "A & N Islands": [["Others", 6], ["Causing Disrepute", 4], ["Fraud", 3], ["Extortion", 2], ["Sexual Exploitation", 2]],
        "Andhra Pradesh": [["Fraud", 3630], ["Others", 1142], ["Sexual Exploitation", 406], ["Extortion", 194], ["Political Motives", 179]],
        "Arunachal Pradesh": [["Fraud", 28], ["Others", 9], ["Personal Revenge", 3], ["Anger", 2], ["Steal Information", 2]],
        "Assam": [["Others", 2717], ["Personal Revenge", 1694], ["Extortion", 1183], ["Sexual Exploitation", 1102], ["Fraud", 922]],
        "Bihar": [["Fraud", 2810], ["Extortion", 216], ["Personal Revenge", 128], ["Sexual Exploitation", 64], ["Anger", 54]],
        "Chandigarh": [["Fraud", 57], ["Sexual Exploitation", 14], ["Others", 12], ["Extortion", 8], ["Prank", 7]],
        "Chhattisgarh": [["Others", 299], ["Fraud", 192], ["Causing Disrepute", 120], ["Sexual Exploitation", 102], ["Prank", 18]],
        "D & N Haveli": [["Sexual Exploitation", 4]],
        "Daman & Diu": [["Others", 3]],
        "Delhi": [["Others", 229], ["Fraud", 140], ["Sexual Exploitation", 109], ["Extortion", 51], ["Developing own Business", 45]],
        "Goa": [["Fraud", 53], ["Causing Disrepute", 29], ["Sexual Exploitation", 9], ["Others", 3], ["Personal Revenge", 2]],
        "Gujarat": [["Fraud", 1944], ["Causing Disrepute", 744], ["Sexual Exploitation", 116], ["Anger", 88], ["Others", 83]],
        "Haryana": [["Others", 1209], ["Fraud", 488], ["Sexual Exploitation", 238], ["Extortion", 58], ["Causing Disrepute", 30]],
        "Himachal Pradesh": [["Sexual Exploitation", 81], ["Fraud", 60], ["Others", 46], ["Causing Disrepute", 27], ["Extortion", 23]],
        "Jammu & Kashmir": [["Fraud", 95], ["Others", 68], ["Causing Disrepute", 36], ["Sexual Exploitation", 34], ["Extortion", 30]],
        "Jharkhand": [["Fraud", 3276], ["Steal Information", 132], ["Others", 109], ["Extortion", 79], ["Developing own Business", 72]],
        "Karnataka": [["Fraud", 29266], ["Others", 787], ["Causing Disrepute", 620], ["Sexual Exploitation", 421], ["Extortion", 242]],
        "Kerala": [["Fraud", 333], ["Sexual Exploitation", 323], ["Personal Revenge", 243], ["Causing Disrepute", 164], ["Anger", 105]],
        "Ladakh": [["Disrupt Public Service", 1]],
        "Lakshadweep": [["Personal Revenge", 6], ["Sexual Exploitation", 2], ["Others", 2], ["Fraud", 1]],
        "Madhya Pradesh": [["Fraud", 855], ["Others", 692], ["Causing Disrepute", 423], ["Sexual Exploitation", 241], ["Personal Revenge", 104]],
        "Maharashtra": [["Fraud", 11133], ["Others", 2718], ["Sexual Exploitation", 2355], ["Anger", 359], ["Causing Disrepute", 324]],
        "Manipur": [["Fraud", 89], ["Others", 36], ["Sexual Exploitation", 32], ["Political Motives", 10], ["Spreading Piracy", 5]],
        "Meghalaya": [["Fraud", 181], ["Others", 45], ["Sexual Exploitation", 21], ["Personal Revenge", 19], ["Anger", 18]],
        "Mizoram": [["Fraud", 10], ["Prank", 8], ["Anger", 6], ["Terrorist Activities - Others", 3], ["Others", 2]],
        "Nagaland": [["Fraud", 5], ["Causing Disrepute", 2], ["Others", 2], ["Personal Revenge", 1], ["Prank", 1]],
        "Odisha": [["Fraud", 3417], ["Extortion", 735], ["Sexual Exploitation", 426], ["Others", 361], ["Spreading Piracy", 43]],
        "Puducherry": [["Extortion", 14], ["Others", 10], ["Fraud", 4], ["Sexual Exploitation", 3], ["Spreading Piracy", 2]],
        "Punjab": [["Fraud", 346], ["Sexual Exploitation", 257], ["Others", 150], ["Extortion", 78], ["Causing Disrepute", 75]],
        "Rajasthan": [["Fraud", 2409], ["Others", 2143], ["Causing Disrepute", 264], ["Sexual Exploitation", 259], ["Extortion", 151]],
        "Sikkim": [["Anger", 1], ["Others", 1], ["Sexual Exploitation", 1], ["Political Motives", 1]],
        "Tamil Nadu": [["Sexual Exploitation", 321], ["Fraud", 313], ["Political Motives", 224], ["Personal Revenge", 203], ["Causing Disrepute", 157]],
        "Telangana": [["Fraud", 7710], ["Others", 1369], ["Extortion", 310], ["Sexual Exploitation", 298], ["Anger", 232]],
        "Tripura": [["Fraud", 24], ["Personal Revenge", 20], ["Sexual Exploitation", 9], ["Causing Disrepute", 8], ["Political Motives", 6]],
        "Uttar Pradesh": [["Fraud", 14024], ["Others", 9406], ["Extortion", 2217], ["Causing Disrepute", 2209], ["Prank", 1763]],
        "Uttarakhand": [["Fraud", 226], ["Others", 104], ["Sexual Exploitation", 86], ["Extortion", 71], ["Anger", 57]],
        "West Bengal": [["Others", 1197], ["Fraud", 253], ["Sexual Exploitation", 203], ["Personal Revenge", 130], ["Extortion", 69]]
    };

    const years = [2017, 2018, 2019, 2020];
    const nationalTotal = 143625;

    const selector = document.getElementById("stateSelector");
    const root = document.getElementById("stateAnalysisRoot");
    const totalMetric = document.getElementById("totalCasesMetric");
    const stateMetric = document.getElementById("stateCountMetric");
    const highestValue = document.getElementById("highestStateValue");
    const lowestValue = document.getElementById("lowestStateValue");
    const stateCount = document.getElementById("analyticsStateCount");
    const snapshotTotal = document.getElementById("snapshotTotal");
    const status = document.getElementById("selectionStatus");

    const totals = Object.entries(data).map(([name, values]) => ({
        name,
        values,
        total: values.reduce((a, b) => a + b, 0)
    }));

    totals.sort((a, b) => b.total - a.total);

    const rankMap = {};
    totals.forEach((item, index) => {
        rankMap[item.name] = index + 1;
    });

    if (totalMetric) totalMetric.textContent = "143,625";
    if (stateMetric) stateMetric.textContent = "37";
    if (stateCount) stateCount.textContent = "37";
    if (snapshotTotal) snapshotTotal.textContent = "143,625";

    if (highestValue) {
        highestValue.textContent = `${totals[0].name} — ${totals[0].total.toLocaleString()}`;
    }

    if (lowestValue) {
        const low = totals[totals.length - 1];
        lowestValue.textContent = `${low.name} — ${low.total.toLocaleString()}`;
    }

    if (selector && root) {
        selector.innerHTML =
            `<option value="">Select a State / UT</option>` +
            Object.keys(data)
                .sort((a, b) => a.localeCompare(b))
                .map(state => `<option value="${escapeHTML(state)}">${escapeHTML(state)}</option>`)
                .join("");

        selector.addEventListener("change", () => {
            const state = selector.value;
            if (!state) {
                showEmpty();
                return;
            }
            renderState(state);
        });

        showEmpty();
    }

    function showEmpty() {
        if (status) {
            status.textContent = "Select a State / UT to load detailed analytics.";
        }
        if (root) {
            root.innerHTML = `
                <div class="analysis-empty">
                    <div class="empty-icon">⌁</div>
                    <h2>Explore India State by State</h2>
                    <p>Select any State or Union Territory above. The map, statistics, charts and analysis will appear here dynamically.</p>
                </div>
            `;
        }
    }

    function renderState(state) {
        const values = data[state];
        const total = values.reduce((a, b) => a + b, 0);
        const rank = rankMap[state];
        const share = ((total / nationalTotal) * 100).toFixed(2);
        const cats = categories[state] || [];
        const maxYear = Math.max(...values);
        const maxCategory = Math.max(...cats.map(x => x[1]), 1);

        if (status) {
            status.textContent = `${state} selected • Rank #${rank} • ${total.toLocaleString()} recorded cases`;
        }

        root.innerHTML = `
            <div class="state-analysis-wrap">
                <div class="state-title">
                    <div>
                        <div class="section-label" style="color:var(--cyan); margin-bottom:5px;">LIVE STATE ANALYSIS</div>
                        <h3>${escapeHTML(state)}</h3>
                        <p>Cyber crime pattern analysis • 2017–2020</p>
                    </div>
                    <div class="state-total">
                        <strong>${total.toLocaleString()}</strong>
                        <span>Total Cases</span>
                    </div>
                </div>

                <div class="state-stats">
                    <div class="state-stat">
                        <span>National Rank</span>
                        <strong>#${rank}</strong>
                    </div>
                    <div class="state-stat">
                        <span>National Share</span>
                        <strong>${share}%</strong>
                    </div>
                    <div class="state-stat">
                        <span>Peak Year</span>
                        <strong>${years[values.indexOf(maxYear)]}</strong>
                    </div>
                    <div class="state-stat">
                        <span>Peak Cases</span>
                        <strong>${maxYear.toLocaleString()}</strong>
                    </div>
                </div>

                <div class="analysis-grid">
                    <div class="analysis-box">
                        <h4>Yearly Crime Trend</h4>
                        <p>Recorded cyber crime cases by year.</p>
                        ${createLineChart(values)}
                    </div>

                    <div class="analysis-box">
                        <h4>India Data Map</h4>
                        <p>Selected region highlighted in the national view.</p>
                        ${createIndiaMap(state)}
                    </div>

                    <div class="analysis-box">
                        <h4>Year-wise Distribution</h4>
                        <p>Direct comparison of annual case volume.</p>
                        <div class="year-bars">
                            ${years.map((year, i) => `
                                <div class="year-row">
                                    <div class="row-top">
                                        <span>${year}</span>
                                        <span>${values[i].toLocaleString()}</span>
                                    </div>
                                    <div class="bar-track">
                                        <div class="bar-fill animated-bar" style="--bar-width:${(values[i] / maxYear) * 100}%"></div>
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                    </div>

                    <div class="analysis-box">
                        <h4>Top Crime Categories</h4>
                        <p>Highest recorded categories for ${escapeHTML(state)}.</p>
                        <div class="category-list">
                            ${cats.map(item => `
                                <div class="category-row">
                                    <div class="row-top">
                                        <span>${escapeHTML(item[0])}</span>
                                        <span>${item[1].toLocaleString()}</span>
                                    </div>
                                    <div class="bar-track">
                                        <div class="bar-fill category-fill" style="--bar-width:${(item[1] / maxCategory) * 100}%"></div>
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                    </div>

                    <div class="analysis-box full">
                        <h4>State Intelligence Summary</h4>
                        <p>Quick analytical reading of the selected state.</p>
                        <div class="insight-grid">
                            <div>
                                <span>2017 → 2020 Change</span>
                                <strong>${calculateChange(values)}%</strong>
                            </div>
                            <div>
                                <span>Highest Category</span>
                                <strong>${cats.length ? escapeHTML(cats[0][0]) : "N/A"}</strong>
                            </div>
                            <div>
                                <span>Highest Category Cases</span>
                                <strong>${cats.length ? cats[0][1].toLocaleString() : "0"}</strong>
                            </div>
                            <div>
                                <span>National Position</span>
                                <strong>#${rank} of 37</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        requestAnimationFrame(() => {
            document.querySelectorAll(".animated-bar").forEach(bar => {
                setTimeout(() => {
                    bar.style.width = bar.style.getPropertyValue("--bar-width");
                }, 80);
            });

            document.querySelectorAll(".category-fill").forEach(bar => {
                setTimeout(() => {
                    bar.style.width = bar.style.getPropertyValue("--bar-width");
                }, 150);
            });

            renderIndiaMap(state);
            animateSVG();
        });
    }

    function createLineChart(values) {
        const width = 650;
        const height = 280;
        const left = 55;
        const right = 25;
        const top = 25;
        const bottom = 45;
        const chartW = width - left - right;
        const chartH = height - top - bottom;
        const max = Math.max(...values, 1);

        const points = values.map((value, index) => {
            const x = left + (index * chartW / 3);
            const y = top + chartH - ((value / max) * chartH);
            return { x, y, value };
        });

        const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
        const area = `${path} L ${points[3].x} ${top + chartH} L ${points[0].x} ${top + chartH} Z`;

        return `
            <div style="width:100%; overflow:hidden; border:1px solid #172d45; border-radius:9px; background:#07101b; padding:8px;">
                <svg viewBox="0 0 ${width} ${height}" width="100%" height="280" preserveAspectRatio="none" class="trend-svg">
                    <defs>
                        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#22d3ee" stop-opacity=".20"/>
                            <stop offset="100%" stop-color="#22d3ee" stop-opacity="0"/>
                        </linearGradient>
                    </defs>
                    ${[0, .25, .5, .75, 1].map(v => {
                        const y = top + chartH - v * chartH;
                        return `<line x1="${left}" y1="${y}" x2="${width - right}" y2="${y}" stroke="#14283e" stroke-width="1"/>`;
                    }).join("")}
                    <path d="${area}" fill="url(#areaGradient)" class="chart-area"/>
                    <path d="${path}" fill="none" stroke="#22d3ee" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="chart-line"/>
                    ${points.map((p, i) => `
                        <circle cx="${p.x}" cy="${p.y}" r="5" fill="#07101b" stroke="#22d3ee" stroke-width="2" class="chart-point"/>
                        <text x="${p.x}" y="${height - 14}" text-anchor="middle" fill="#8ea2b8" font-size="11">${years[i]}</text>
                        <text x="${p.x}" y="${p.y - 13}" text-anchor="middle" fill="#f5f8fc" font-size="10" font-weight="700">${p.value.toLocaleString()}</text>
                    `).join("")}
                </svg>
            </div>
        `;
    }

    const INDIA_TOPOLOGY_URL = "https://cdn.jsdelivr.net/gh/udit-001/india-maps-data@2884453/topojson/india.json";
    const mapNameAliases = {
        "A & N Islands": "Andaman and Nicobar Islands",
        "D & N Haveli": "Dadra and Nagar Haveli and Daman and Diu",
        "Daman & Diu": "Dadra and Nagar Haveli and Daman and Diu",
        "Jammu & Kashmir": "Jammu and Kashmir"
    };
    let indiaTopologyPromise;
    let indiaMapRenderId = 0;

    function createIndiaMap(selected) {
        return `
            <div style="position:relative; width:100%; min-height:300px; overflow:hidden; border:1px solid #172d45; border-radius:9px; background:linear-gradient(#0d2237 1px,transparent 1px),linear-gradient(90deg,#0d2237 1px,transparent 1px),#050c16; background-size:25px 25px;">
                <div id="indiaMapRoot" role="status" aria-live="polite" style="display:grid; min-height:300px; place-items:center; color:#8ea2b8; font-size:13px;">Loading India boundary map…</div>
                <div style="position:absolute; left:12px; top:12px; padding:6px 9px; border:1px solid #21415d; border-radius:5px; background:rgba(5,9,18,.88); color:#22d3ee; font-size:9px; font-weight:700; letter-spacing:1px; pointer-events:none;">
                    ACTIVE: ${escapeHTML(selected)}
                </div>
            </div>
        `;
    }

    function getIndiaTopology() {
        if (!indiaTopologyPromise) {
            indiaTopologyPromise = fetch(INDIA_TOPOLOGY_URL)
                .then(response => {
                    if (!response.ok) throw new Error(`Map data could not load (${response.status})`);
                    return response.json();
                });
        }
        return indiaTopologyPromise;
    }

    function mapNameFor(state) {
        return mapNameAliases[state] || state;
    }

    function statesForMapName(mapName) {
        return Object.keys(data).filter(state => mapNameFor(state) === mapName);
    }

    function decodeArc(topology, arcIndex) {
        const arc = topology.arcs[arcIndex < 0 ? ~arcIndex : arcIndex];
        const transform = topology.transform;
        let x = 0;
        let y = 0;
        const points = arc.map(point => {
            x += point[0];
            y += point[1];
            return [
                x * transform.scale[0] + transform.translate[0],
                y * transform.scale[1] + transform.translate[1]
            ];
        });
        return arcIndex < 0 ? points.reverse() : points;
    }

    function joinArcs(topology, arcIndexes) {
        return arcIndexes.reduce((points, arcIndex) => {
            const arc = decodeArc(topology, arcIndex);
            return points.concat(points.length ? arc.slice(1) : arc);
        }, []);
    }

    function geometryRings(topology, geometry) {
        if (geometry.type === "Polygon") {
            return geometry.arcs.map(ring => joinArcs(topology, ring));
        }
        if (geometry.type === "MultiPolygon") {
            return geometry.arcs.flatMap(polygon => polygon.map(ring => joinArcs(topology, ring)));
        }
        return [];
    }

    function createMapPath(rings, project) {
        return rings.map(ring => {
            if (!ring.length) return "";
            return `M ${ring.map(point => {
                const [x, y] = project(point);
                return `${x.toFixed(2)} ${y.toFixed(2)}`;
            }).join(" L ")} Z`;
        }).join(" ");
    }

    async function renderIndiaMap(selected) {
        const renderId = ++indiaMapRenderId;
        const host = document.getElementById("indiaMapRoot");
        if (!host) return;

        try {
            const topology = await getIndiaTopology();
            if (renderId !== indiaMapRenderId || !document.body.contains(host)) return;

            const geometries = topology.objects.states.geometries;
            const features = geometries.map(geometry => ({
                name: geometry.properties.st_nm,
                rings: geometryRings(topology, geometry)
            }));
            const coordinates = features.flatMap(feature => feature.rings.flat());
            const longitudes = coordinates.map(point => point[0]);
            const latitudes = coordinates.map(point => point[1]);
            const minLongitude = Math.min(...longitudes);
            const maxLongitude = Math.max(...longitudes);
            const minLatitude = Math.min(...latitudes);
            const maxLatitude = Math.max(...latitudes);
            const width = 640;
            const height = 340;
            const padding = 18;
            const scale = Math.min(
                (width - padding * 2) / (maxLongitude - minLongitude),
                (height - padding * 2) / (maxLatitude - minLatitude)
            );
            const mapWidth = (maxLongitude - minLongitude) * scale;
            const mapHeight = (maxLatitude - minLatitude) * scale;
            const offsetX = (width - mapWidth) / 2;
            const offsetY = (height - mapHeight) / 2;
            const project = ([longitude, latitude]) => [
                offsetX + (longitude - minLongitude) * scale,
                offsetY + (maxLatitude - latitude) * scale
            ];

            host.removeAttribute("role");
            host.innerHTML = `
                <svg viewBox="0 0 ${width} ${height}" width="100%" height="300" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Interactive map of India showing State and Union Territory boundaries">
                    ${features.map(feature => {
                        const mappedStates = statesForMapName(feature.name);
                        const active = mappedStates.includes(selected);
                        const selectable = mappedStates.length > 0;
                        const label = selectable
                            ? `${feature.name}. ${active ? "Selected." : "Select this region."}`
                            : `${feature.name}. No matching data.`;
                        return `<path d="${createMapPath(feature.rings, project)}" data-map-name="${escapeHTML(feature.name)}" class="india-state-boundary" fill="${active ? "#22d3ee" : selectable ? "#173d59" : "#102536"}" stroke="${active ? "#f5f8fc" : "#4d7592"}" stroke-width="${active ? "1.6" : "0.7"}" fill-rule="evenodd" tabindex="${selectable ? "0" : "-1"}" role="${selectable ? "button" : "presentation"}" aria-label="${escapeHTML(label)}" style="cursor:${selectable ? "pointer" : "default"}; transition:fill .18s ease,stroke .18s ease; outline:none"><title>${escapeHTML(label)}</title></path>`;
                    }).join("")}
                </svg>
                <p style="margin:0; padding:0 12px 12px; color:#8ea2b8; font-size:11px; text-align:center;">Select a State or Union Territory from the map or dropdown. Legacy Daman & Diu / Dadra & Nagar Haveli data share the current combined UT boundary.</p>
            `;

            host.querySelectorAll("[data-map-name]").forEach(path => {
                const selectRegion = () => {
                    const matchingStates = statesForMapName(path.dataset.mapName);
                    if (!matchingStates.length) return;
                    const nextState = matchingStates.includes(selected) ? selected : matchingStates[0];
                    if (selector) selector.value = nextState;
                    renderState(nextState);
                };
                path.addEventListener("click", selectRegion);
                path.addEventListener("keydown", event => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        selectRegion();
                    }
                });
                path.addEventListener("mouseenter", () => {
                    if (path.getAttribute("fill") !== "#22d3ee") path.setAttribute("fill", "#215876");
                });
                path.addEventListener("mouseleave", () => {
                    if (path.getAttribute("fill") !== "#22d3ee") path.setAttribute("fill", "#173d59");
                });
            });
        } catch (error) {
            if (renderId !== indiaMapRenderId || !document.body.contains(host)) return;
            host.textContent = "India boundary map could not load. Please check the internet connection and reload the page.";
            console.error("India map failed to load:", error);
        }
    }

    function animateSVG() {
        const line = document.querySelector(".chart-line");
        if (line) {
            const length = line.getTotalLength();
            line.style.strokeDasharray = length;
            line.style.strokeDashoffset = length;
            line.animate([{ strokeDashoffset: length }, { strokeDashoffset: 0 }], {
                duration: 1100,
                easing: "cubic-bezier(.2,.8,.2,1)",
                fill: "forwards"
            });
        }

        document.querySelectorAll(".chart-point").forEach((point, index) => {
            point.animate([{ opacity: 0, transform: "scale(.2)" }, { opacity: 1, transform: "scale(1)" }], {
                duration: 350,
                delay: 450 + index * 100,
                easing: "ease-out",
                fill: "forwards"
            });
        });

        document.querySelectorAll(".map-pulse").forEach(pulse => {
            pulse.animate([{ opacity: .8, transform: "scale(.6)" }, { opacity: 0, transform: "scale(1.7)" }], {
                duration: 1200,
                iterations: Infinity,
                easing: "ease-out"
            });
        });
    }

    function calculateChange(values) {
        const first = values[0];
        const last = values[values.length - 1];
        if (first === 0) return last > 0 ? "∞" : "0";
        return (((last - first) / first) * 100).toFixed(1);
    }

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");
    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
            });
        });
    }

    function escapeHTML(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
});
