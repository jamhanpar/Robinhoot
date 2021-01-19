## Components will be organized in the following structure:
- `Root`
    - `App`
        - `NavBar`
            - `Logo`
            - `SearchBar`
            - `MenuIndex`
        - (main component goes here)
        - `Footer`

## The following routes will render components under the NavBar
* `/`
    - `Splash`
* `/login`
    - `SessionForm`
* `/signup`
    - `SessionForm`
* `/dashboard`
    - `DashboardContainer`
        - `DashboardComponent`
        - `SectorsContainer`
            - `SectorIndex`
                - `SectorIndexItem`
        - `WatchlistContainer`
            - `WatchlistIndex`
                - `WatchlistIndexItem`
        - `NewsContainer`
            - `NewsIndex`
                - `NewsIndexItem`
* `/stock/:stockId`
    - `StockContainer`
        - `SectorIndex`
        - `DashboardComponent`
        - `CorporateContainer`
            - `CorporateIndex`
                - `CorporateIndexItem`
        - `SectorContainer`
            - `SectorIndex`
                - `SectorIndexItem`
        - `NewsContainer`
            - `NewsIndex`
                - `NewsIndexItem`
    - `TradeContainer`
        - `TradeForm`
* `/sectors/:sectorId`
    - `StockContainer`
        - `StockIndex`
            - `StockIndexItem`
        
    
