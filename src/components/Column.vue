<template>
    <v-form>
        <v-text-field v-model="name" label="Column Name" />
        <v-select
        v-model="type"
        :items="items"
        label="Type"
        ></v-select>
        <v-expansion-panels class="mb-4" flat popout>
            <v-expansion-panel>
                <v-expansion-panel-header>Other</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-textarea v-model="comment" single-line rows="1" label="Comment" />
                    <v-row>
                        <v-switch v-model="nullable" class="ma-2" label="Nullable"></v-switch>
                        <v-switch v-model="unsigned" class="ma-2" label="Unsigned"></v-switch>
                        <v-switch v-model="unique" class="ma-2" label="Unique"></v-switch>
                        <v-switch v-model="index" class="ma-2" label="Index"></v-switch>
                    </v-row>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <v-btn color="error" @click="onDelete">Delete</v-btn>
        <v-divider class="my-4"/>
    </v-form>
</template>

<script>
export default {
    props: { internalIndex: { type: Number, required: true } },
    data: () => ({
        items: [
            { text: 'String', value: 'string'},
            { text: 'Foreign ID', value: 'foreignId'},
            { text: 'bigIncrements', value: 'bigIncrements'},
            { text: 'bigInteger', value: 'bigInteger'},
            { text: 'binary', value: 'binary'},
            { text: 'boolean', value: 'boolean'},
            { text: 'char', value: 'char'},
            { text: 'date', value: 'date'},
            { text: 'dateTime', value: 'dateTime'},
            { text: 'dateTimeTz', value: 'dateTimeTz'},
            { text: 'decimal', value: 'decimal'},
            { text: 'double', value: 'double'},
            { text: 'float', value: 'float'},
            { text: 'geometry', value: 'geometry'},
            { text: 'geometryCollection', value: 'geometryCollection'},
            { text: 'increments', value: 'increments'},
            { text: 'integer', value: 'integer'},
            { text: 'ipAddress', value: 'ipAddress'},
            { text: 'json', value: 'json'},
            { text: 'jsonb', value: 'jsonb'},
            { text: 'lineString', value: 'lineString'},
            { text: 'longText', value: 'longText'},
            { text: 'macAddress', value: 'macAddress'},
            { text: 'mediumIncrements', value: 'mediumIncrements'},
            { text: 'mediumInteger', value: 'mediumInteger'},
            { text: 'mediumText', value: 'mediumText'},
            { text: 'morphs', value: 'morphs'},
            { text: 'uuidMorphs', value: 'uuidMorphs'},
            { text: 'multiLineString', value: 'multiLineString'},
            { text: 'multiPoint', value: 'multiPoint'},
            { text: 'multiPolygon', value: 'multiPolygon'},
            { text: 'nullableMorphs', value: 'nullableMorphs'},
            { text: 'nullableUuidMorphs', value: 'nullableUuidMorphs'},
            { text: 'nullableTimestamps', value: 'nullableTimestamps'},
            { text: 'point', value: 'point'},
            { text: 'polygon', value: 'polygon'},
            { text: 'set', value: 'set'},
            { text: 'smallIncrements', value: 'smallIncrements'},
            { text: 'smallInteger', value: 'smallInteger'},
            { text: 'softDeletesTz', value: 'softDeletesTz'},
            { text: 'text', value: 'text'},
            { text: 'time', value: 'time'},
            { text: 'timeTz', value: 'timeTz'},
            { text: 'timestamp', value: 'timestamp'},
            { text: 'timestampTz', value: 'timestampTz'},
            { text: 'timestamps', value: 'timestamps'},
            { text: 'timestampsTz', value: 'timestampsTz'},
            { text: 'tinyIncrements', value: 'tinyIncrements'},
            { text: 'tinyInteger', value: 'tinyInteger'},
            { text: 'unsignedBigInteger', value: 'unsignedBigInteger'},
            { text: 'unsignedDecimal', value: 'unsignedDecimal'},
            { text: 'unsignedInteger', value: 'unsignedInteger'},
            { text: 'unsignedMediumInteger', value: 'unsignedMediumInteger'},
            { text: 'unsignedSmallInteger', value: 'unsignedSmallInteger'},
            { text: 'unsignedTinyInteger', value: 'unsignedTinyInteger'},
            { text: 'uuid', value: 'uuid'},
            { text: 'year', value: 'year'},
            { text: 'Integer', value: 'integer' }
        ]
    }),
    computed: {
        column() {
            return this.$store.getters.column(this.internalIndex);
        },
        name: {
            get() {
                return this.column.name;
            },
            set(name) {
                this.$store.dispatch('UPDATE_COLUMN_NAME', { index: this.internalIndex, name });
            }
        },
        type: {
            get() {
                return this.column.type;
            },
            set(type) {
                this.$store.dispatch('UPDATE_COLUMN_TYPE', { index: this.internalIndex, type });
            }
        },
        comment: {
            get() {
                return this.column.comment;
            },
            set(comment) {
                this.$store.dispatch('UPDATE_COLUMN_COMMENT', { index: this.internalIndex, comment });
            }
        },
        nullable: {
            get() {
                return this.column.nullable;
            },
            set(nullable) {
                this.$store.dispatch('UPDATE_COLUMN_NULLABLE', { index: this.internalIndex, nullable });
            }
        },
        unsigned: {
            get() {
                return this.column.unsigned;
            },
            set(unsigned) {
                this.$store.dispatch('UPDATE_COLUMN_UNSIGNED', { index: this.internalIndex, unsigned });
            }
        },
        unique: {
            get() {
                return this.column.unique;
            },
            set(unique) {
                this.$store.dispatch('UPDATE_COLUMN_UNIQUE', { index: this.internalIndex, unique });
            }
        },
        index: {
            get() {
                return this.column.index;
            },
            set(index) {
                this.$store.dispatch('UPDATE_COLUMN_INDEX', { index: this.internalIndex, value: index });
            }
        }
    },
    methods: {
        onDelete() {
            this.$store.dispatch('DELETE_COLUMN', this.internalIndex);
        }
    }
}
</script>