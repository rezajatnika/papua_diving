class PowerMeter
  include ActiveModel::AttributeMethods
  include ActiveModel::Model

  # Atributes
  attr_accessor :id,
    :current_phase_1,
    :current_phase_2,
    :current_phase_3,
    :device_name,
    :power_factor_1,
    :power_factor_2,
    :power_factor_3,
    :server_timestamp,
    :total_active_power,
    :total_apparent_power,
    :total_exported_energy,
    :total_imported_energy,
    :total_power_factor,
    :voltage_phase_1_2,
    :voltage_phase_2_3,
    :voltage_phase_3_1
end
