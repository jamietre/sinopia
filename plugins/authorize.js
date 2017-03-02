
module.exports = Plugin

function Plugin(config, stuff) {
  var self = Object.create(Plugin.prototype)
  self._config = config
  return self
}

// plugin is expected to be compatible with...
Plugin.prototype.sinopia_version = '1.1.0'

Plugin.prototype.allow_access = function(user, pkg, cb) {
  var self = this
  if (!pkg.handled_by_auth_plugin) {
    // delegate to next plugin
    return cb(null, false)
  }
  if (user.name !== self._config.allow_user) {
    let err = Error("i don't know anything about you")
    err.status = 403
    return cb(err)
  }
  if (pkg.name !== self._config.to_access) {
    let err = Error("you're not allowed here")
    err.status = 403
    return cb(err)
  }
  return cb(null, true)
}

