# backend-cache
Automated intermediary for WellDone API

First layer of a basic intermediary BE:
    - Endpoint for well-sensor 'status':
        https://welldone-cache.herokuapp.com/p-api/{id}

    This endpoint will return a 14 day spread, including a 'status' for each. The status color code is as follows:
        0 = RED
        1 = YELLOW
        2 = GREEN





Second layer: cache for each endpoint as it is requested, with a function to compare dates - limiting the number of axios calls to the proxy API (which will be replaced by the real API).