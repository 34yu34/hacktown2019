let context = {}
export const App_Module = (function(context) {

  context.polyline_service = undefined;
  context.polyline_service_listener = () => { }

  return {
    set_polyline: function(service) {
      context.polyline_service = service
      context.polyline_service_listener()
      return context.polyline_service
    },

    get_polyline: function() {
      return context.polyline_service
    },

    get_polyline_safe: function() {
      return new Promise((resolve, _reject) => {
        context.polyline_service_listener = () => {
          resolve(context.polyline_service)
        }
      })
    }
  };
})(context);
