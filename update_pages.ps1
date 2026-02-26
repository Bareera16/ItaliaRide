$airportDirs = Get-ChildItem -Path "src\app\airport" -Directory | Where-Object { $_.Name -ne "[slug]" }
foreach ($dir in $airportDirs) {
    $slug = $dir.Name
    $content = @"
import AirportPage from '../[slug]/page';

export default async function Page() {
    return await AirportPage({ params: Promise.resolve({ slug: "$slug" }) });
}
"@
    $content | Set-Content -Path "$($dir.FullName)\page.tsx" -Encoding utf8
}

$cityDirs = Get-ChildItem -Path "src\app\city" -Directory | Where-Object { $_.Name -ne "[slug]" }
foreach ($dir in $cityDirs) {
    $slug = $dir.Name
    $content = @"
import CityPage from '../[slug]/page';

export default async function Page() {
    return await CityPage({ params: Promise.resolve({ slug: "$slug" }) });
}
"@
    $content | Set-Content -Path "$($dir.FullName)\page.tsx" -Encoding utf8
}
